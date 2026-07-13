use("my-ecommerce-business");

// Clear existing data
db.preferences.deleteMany({});

// Insert mock data for preferences collection (10 records)
db.preferences.insertMany([
  {
    "_id": "pref0001",
    "userId": "user0001",
    "categoryName": ["พัฒนาตัวเอง", "วรรณกรรมแปล", "ฮีลใจ"]
  },
  {
    "_id": "pref0002",
    "userId": "user0002",
    "categoryName": ["ธุรกิจและการลงทุน", "เทคโนโลยีและวิทยาศาสตร์"]
  },
  {
    "_id": "pref0003",
    "userId": "user0003",
    "categoryName": ["ศิลปะและการออกแบบ", "วรรณกรรมไทย", "ฮีลใจ"]
  },
  {
    "_id": "pref0004",
    "userId": "user0004",
    "categoryName": ["นวนิยายสืบสวน", "วรรณกรรมแปล"]
  },
  {
    "_id": "pref0005",
    "userId": "user0005",
    "categoryName": ["ประวัติศาสตร์", "ปรัชญา", "พัฒนาตัวเอง"]
  },
  {
    "_id": "pref0006",
    "userId": "user0006",
    "categoryName": ["สุขภาพและอาหาร", "การท่องเที่ยว"]
  },
  {
    "_id": "pref0007",
    "userId": "user0007",
    "categoryName": ["การเงินส่วนบุคคล", "การตลาดและการขาย"]
  },
  {
    "_id": "pref0008",
    "userId": "user0008",
    "categoryName": ["วรรณกรรมเยาวชน", "แฟนตาซี"]
  },
  {
    "_id": "pref0009",
    "userId": "user0009",
    "categoryName": ["คอมพิวเตอร์และโปรแกรมมิ่ง", "วิทยาศาสตร์"]
  },
  {
    "_id": "pref0010",
    "userId": "admin0001",
    "categoryName": ["ประวัติศาสตร์การพิมพ์", "หนังสือหายาก"]
  }
]);

// Find all preferences
db.preferences.find({});
