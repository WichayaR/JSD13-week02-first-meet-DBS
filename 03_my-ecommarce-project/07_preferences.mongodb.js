use("my-ecommerce-business");

// Clear existing data
db.preferences.deleteMany({});

// Insert mock data for preferences collection (10 records)
db.preferences.insertMany([
  {
    "_id": ObjectId("65f400000000000000000201"),
    "userId": ObjectId("65f400000000000000000001"),
    "categoryName": ["พัฒนาตัวเอง", "วรรณกรรมแปล", "ฮีลใจ"]
  },
  {
    "_id": ObjectId("65f400000000000000000202"),
    "userId": ObjectId("65f400000000000000000002"),
    "categoryName": ["ธุรกิจและการลงทุน", "เทคโนโลยีและวิทยาศาสตร์"]
  },
  {
    "_id": ObjectId("65f400000000000000000203"),
    "userId": ObjectId("65f400000000000000000003"),
    "categoryName": ["ศิลปะและการออกแบบ", "วรรณกรรมไทย", "ฮีลใจ"]
  },
  {
    "_id": ObjectId("65f400000000000000000204"),
    "userId": ObjectId("65f400000000000000000004"),
    "categoryName": ["นวนิยายสืบสวน", "วรรณกรรมแปล"]
  },
  {
    "_id": ObjectId("65f400000000000000000205"),
    "userId": ObjectId("65f400000000000000000005"),
    "categoryName": ["ประวัติศาสตร์", "ปรัชญา", "พัฒนาตัวเอง"]
  },
  {
    "_id": ObjectId("65f400000000000000000206"),
    "userId": ObjectId("65f400000000000000000006"),
    "categoryName": ["สุขภาพและอาหาร", "การท่องเที่ยว"]
  },
  {
    "_id": ObjectId("65f400000000000000000207"),
    "userId": ObjectId("65f400000000000000000007"),
    "categoryName": ["การเงินส่วนบุคคล", "การตลาดและการขาย"]
  },
  {
    "_id": ObjectId("65f400000000000000000208"),
    "userId": ObjectId("65f400000000000000000008"),
    "categoryName": ["วรรณกรรมเยาวชน", "แฟนตาซี"]
  },
  {
    "_id": ObjectId("65f400000000000000000209"),
    "userId": ObjectId("65f400000000000000000009"),
    "categoryName": ["คอมพิวเตอร์และโปรแกรมมิ่ง", "วิทยาศาสตร์"]
  },
  {
    "_id": ObjectId("65f40000000000000000020a"),
    "userId": ObjectId("65f40000000000000000000a"),
    "categoryName": ["ประวัติศาสตร์การพิมพ์", "หนังสือหายาก"]
  }
]);

// Find all preferences
db.preferences.find({});
