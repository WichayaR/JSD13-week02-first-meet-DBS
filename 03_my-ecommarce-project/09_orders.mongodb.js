use("my-ecommerce-business");

// Clear existing data
db.orders.deleteMany({});

// Insert mock data for orders collection (10 orders)
db.orders.insertMany([
  {
    "_id": "order0001",
    "userId": "user0001",
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
    "_id": "order0002",
    "userId": "user0002",
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
    "_id": "order0003",
    "userId": "user0003",
    "orderDate": ISODate("2026-07-13T15:15:00Z"),
    "totalAmount": 195,
    "status": "pending",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-13T15:15:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": "order0004",
    "userId": "user0004",
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
    "_id": "order0005",
    "userId": "user0005",
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
    "_id": "order0006",
    "userId": "user0006",
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
    "_id": "order0007",
    "userId": "user0007",
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
    "_id": "order0008",
    "userId": "user0008",
    "orderDate": ISODate("2026-07-15T08:30:00Z"),
    "totalAmount": 180,
    "status": "pending",
    "statusHistory": [
      { "status": "pending", "changedAt": ISODate("2026-07-15T08:30:00Z") }
    ],
    "paymentMethod": "PromptPay"
  },
  {
    "_id": "order0009",
    "userId": "user0009",
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
    "_id": "order0010",
    "userId": "user0001", // user0001 สั่งซื้อครั้งที่สอง
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
