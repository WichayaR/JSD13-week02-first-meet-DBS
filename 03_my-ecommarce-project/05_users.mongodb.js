use("my-ecommerce-business");

// Clear existing data
db.users.deleteMany({});

// Insert mock data for users collection (10 users)
db.users.insertMany([
  {
    "_id": ObjectId("65f400000000000000000001"),
    "firstName": "สมชาย",
    "lastName": "รักการอ่าน",
    "tel": "0811234567",
    "email": "somchai@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000002"),
    "firstName": "วันดี",
    "lastName": "เรียนรู้ดี",
    "tel": "0822234567",
    "email": "wandee@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000003"),
    "firstName": "สมบัติ",
    "lastName": "สร้างสรรค์",
    "tel": "0833345678",
    "email": "sombat@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000004"),
    "firstName": "นารี",
    "lastName": "ใจดี",
    "tel": "0844455667",
    "email": "naree@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000005"),
    "firstName": "ปรีชา",
    "lastName": "รักเรียน",
    "tel": "0855566778",
    "email": "preecha@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000006"),
    "firstName": "วิภาวรรณ",
    "lastName": "รวยรื่น",
    "tel": "0866677889",
    "email": "wipawan@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000007"),
    "firstName": "อภิสิทธิ์",
    "lastName": "ก้าวไกล",
    "tel": "0877788990",
    "email": "aphisit@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000008"),
    "firstName": "สุรศักดิ์",
    "lastName": "สู้ชีวิต",
    "tel": "0888899001",
    "email": "surasak@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f400000000000000000009"),
    "firstName": "ณัฐพล",
    "lastName": "สายเทค",
    "tel": "0899900112",
    "email": "nattaphol@fakemail.com",
    "role": "customer"
  },
  {
    "_id": ObjectId("65f40000000000000000000a"),
    "firstName": "สมหญิง",
    "lastName": "ชอบสะสม",
    "tel": "0999999999",
    "email": "somying@fakemail.com",
    "role": "admin"
  }
]);

// Find all users
db.users.find({});