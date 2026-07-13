use("my-ecommerce-business");

// ==========================================
// ตัวอย่างที่ 1: ดึงข้อมูล User พร้อมกับ Address ของเขา (1:1 / 1:N Join)
// เปรียบเสมือน SQL: SELECT * FROM users LEFT JOIN address ON users._id = address.userId
// ==========================================
db.users.aggregate([
  {
    $lookup: {
      from: "address",          // คอลเลกชันที่ต้องการไปเชื่อม (ปลายทาง)
      localField: "_id",        // ฟิลด์ในคอลเลกชันปัจจุบัน (users._id)
      foreignField: "userId",   // ฟิลด์ในคอลเลกชันปลายทาง (address.userId)
      as: "addressDetails"      // ชื่อฟิลด์ผลลัพธ์ที่จะใส่ข้อมูลที่เชื่อมเข้ามา (เป็น Array)
    }
  }
]);

// ==========================================
// ตัวอย่างที่ 2: ดึงข้อมูล Order พร้อมกับรายละเอียดสินค้า (order_items) และข้อมูลหนังสือ (books)
// (Multi-stage Join)
// ==========================================
db.orders.aggregate([
  // ขั้นตอนที่ 1: ดึงรายการออเดอร์ไอเทมที่เกี่ยวข้อง
  {
    $lookup: {
      from: "order_items",
      localField: "_id",
      foreignField: "orderId",
      as: "items"
    }
  },
  // ขั้นตอนที่ 2: ใช้ $unwind เพื่อระเบิดอาร์เรย์ของ items ออกมาทำงานทีละชิ้น เพื่อดึงข้อมูลหนังสือ (books)
  {
    $unwind: "$items"
  },
  // ขั้นตอนที่ 3: ไปเชื่อมกับคอลเลกชัน books เพื่อดึงรายละเอียดของหนังสือแต่ละเล่ม
  {
    $lookup: {
      from: "books",
      localField: "items.bookId",
      foreignField: "_id",
      as: "items.bookDetails"
    }
  },
  // ขั้นตอนที่ 4: แปลง bookDetails จาก Array ให้เป็น Object ชั้นเดียวเพื่อให้ง่ายต่อการดู
  {
    $unwind: "$items.bookDetails"
  },
  // ขั้นตอนที่ 5: จัดกลุ่ม (Group) กลับมารวมอยู่ในออเดอร์เดียวกันเหมือนเดิม
  {
    $group: {
      _id: "$_id",
      userId: { $first: "$userId" },
      orderDate: { $first: "$orderDate" },
      totalAmount: { $first: "$totalAmount" },
      status: { $first: "$status" },
      statusHistory: { $first: "$statusHistory" },
      paymentMethod: { $first: "$paymentMethod" },
      items: { $push: "$items" }
    }
  }
]);
