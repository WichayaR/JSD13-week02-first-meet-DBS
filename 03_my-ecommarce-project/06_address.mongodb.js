use("my-ecommerce-business");

// Clear existing data
db.address.deleteMany({});

// Insert mock data for address collection (10 records)
db.address.insertMany([
  {
    "_id": ObjectId("65f400000000000000000101"),
    "userId": ObjectId("65f400000000000000000001"),
    "houseNo": "99/99",
    "street": "ถนนรัชดาภิเษก",
    "subDistrict": "แขวงห้วยขวาง",
    "district": "เขตห้วยขวาง",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10310"
  },
  {
    "_id": ObjectId("65f400000000000000000102"),
    "userId": ObjectId("65f400000000000000000002"),
    "houseNo": "123/45",
    "street": "ถนนสุขุมวิท",
    "subDistrict": "แขวงคลองเตย",
    "district": "เขตคลองเตย",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10110"
  },
  {
    "_id": ObjectId("65f400000000000000000103"),
    "userId": ObjectId("65f400000000000000000003"),
    "houseNo": "88/1",
    "street": "ถนนนิมมานเหมินท์",
    "subDistrict": "ตำบลสุเทพ",
    "district": "อำเภอเมืองเชียงใหม่",
    "province": "จังหวัดเชียงใหม่",
    "zipCode": "50200"
  },
  {
    "_id": ObjectId("65f400000000000000000104"),
    "userId": ObjectId("65f400000000000000000004"),
    "houseNo": "55/12",
    "street": "ถนนลาดพร้าว",
    "subDistrict": "แขวงจอมพล",
    "district": "เขตจตุจักร",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10900"
  },
  {
    "_id": ObjectId("65f400000000000000000105"),
    "userId": ObjectId("65f400000000000000000005"),
    "houseNo": "777/8",
    "street": "ถนนพหลโยธิน",
    "subDistrict": "ตำบลคลองหนึ่ง",
    "district": "อำเภอคลองหลวง",
    "province": "จังหวัดปทุมธานี",
    "zipCode": "12120"
  },
  {
    "_id": ObjectId("65f400000000000000000106"),
    "userId": ObjectId("65f400000000000000000006"),
    "houseNo": "10/3",
    "street": "ถนนรามคำแหง",
    "subDistrict": "แขวงหัวหมาก",
    "district": "เขตบางกะปิ",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10240"
  },
  {
    "_id": ObjectId("65f400000000000000000107"),
    "userId": ObjectId("65f400000000000000000007"),
    "houseNo": "200/15",
    "street": "ถนนพะเนียง",
    "subDistrict": "ตำบลตลาดใหญ่",
    "district": "อำเภอเมืองภูเก็ต",
    "province": "จังหวัดภูเก็ต",
    "zipCode": "83000"
  },
  {
    "_id": ObjectId("65f400000000000000000108"),
    "userId": ObjectId("65f400000000000000000008"),
    "houseNo": "15/9",
    "street": "ถนนมิตรภาพ",
    "subDistrict": "ตำบลในเมือง",
    "district": "อำเภอเมืองนครราชสีมา",
    "province": "จังหวัดนครราชสีมา",
    "zipCode": "30000"
  },
  {
    "_id": ObjectId("65f400000000000000000109"),
    "userId": ObjectId("65f400000000000000000009"),
    "houseNo": "44",
    "street": "ถนนเจริญกรุง",
    "subDistrict": "แขวงบางคอแหลม",
    "district": "เขตบางคอแหลม",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10120"
  },
  {
    "_id": ObjectId("65f40000000000000000010a"),
    "userId": ObjectId("65f400000000000000000001"), // ที่อยู่อันที่ 2 ของ user0001 เพื่อแสดงความสัมพันธ์แบบ 1:N
    "houseNo": "50/2",
    "street": "ถนนเพชรบุรี",
    "subDistrict": "แขวงพญาไท",
    "district": "เขตราชเทวี",
    "province": "จังหวัดกรุงเทพมหานคร",
    "zipCode": "10400"
  }
]);

// Find all addresses
db.address.find({});
