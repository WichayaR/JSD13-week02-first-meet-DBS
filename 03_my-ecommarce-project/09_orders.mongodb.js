use("my-ecommerce-business");

// Clear existing data
db.orders.deleteMany({});

// Insert mock data for orders collection (10 orders)
db.orders.insertMany([
  {
    "_id": ObjectId("65f400000000000000000401"),
    "userId": ObjectId("65f400000000000000000001"),
    "orderDate": ISODate("2026-07-13T10:00:00Z"),
    "totalAmount": 370,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-13T09:55:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-13T10:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000402"),
    "userId": ObjectId("65f400000000000000000002"),
    "orderDate": ISODate("2026-07-13T11:30:00Z"),
    "totalAmount": 510,
    "status": "shipping",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-13T11:20:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-13T11:30:00Z") },
      { "status": "shipping", "changedAt": ISODate("2026-07-13T14:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000403"),
    "userId": ObjectId("65f400000000000000000003"),
    "orderDate": ISODate("2026-07-13T15:15:00Z"),
    "totalAmount": 195,
    "status": "pending",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-13T15:15:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000404"),
    "userId": ObjectId("65f400000000000000000004"),
    "orderDate": ISODate("2026-07-14T09:00:00Z"),
    "totalAmount": 265,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-14T08:50:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-14T09:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000405"),
    "userId": ObjectId("65f400000000000000000005"),
    "orderDate": ISODate("2026-07-14T10:30:00Z"),
    "totalAmount": 430,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-14T10:20:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-14T10:30:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000406"),
    "userId": ObjectId("65f400000000000000000006"),
    "orderDate": ISODate("2026-07-14T12:00:00Z"),
    "totalAmount": 150,
    "status": "completed",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-14T11:55:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-14T12:00:00Z") },
      { "status": "shipping", "changedAt": ISODate("2026-07-14T14:30:00Z") },
      { "status": "completed", "changedAt": ISODate("2026-07-15T10:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000407"),
    "userId": ObjectId("65f400000000000000000007"),
    "orderDate": ISODate("2026-07-14T14:45:00Z"),
    "totalAmount": 470,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-14T14:40:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-14T14:45:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000408"),
    "userId": ObjectId("65f400000000000000000008"),
    "orderDate": ISODate("2026-07-15T08:30:00Z"),
    "totalAmount": 180,
    "status": "pending",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-15T08:30:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f400000000000000000409"),
    "userId": ObjectId("65f400000000000000000009"),
    "orderDate": ISODate("2026-07-15T11:00:00Z"),
    "totalAmount": 385,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-15T10:50:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-15T11:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": ObjectId("65f40000000000000000040a"),
    "userId": ObjectId("65f400000000000000000001"), // user0001 สั่งซื้อครั้งที่สอง
    "orderDate": ISODate("2026-07-15T16:00:00Z"),
    "totalAmount": 290,
    "status": "paid",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-15T15:55:00Z") },
      { "status": "paid", "changedAt": ISODate("2026-07-15T16:00:00Z") }
    ],
    "paymentMethod": "PromptPay"
  }
]);

// Find all orders
db.orders.find({});
