use("my-ecommerce-business");

// Clear existing data
db.order_items.deleteMany({});

// Insert mock data for order items collection
db.order_items.insertMany([
  // Items for order0001 (Total = 250 + 120 = 370)
  {
    "_id": "orderItem0001",
    "orderId": "order0001",
    "bookId": "book0001",
    "quantity": 1,
    "pricePerUnit": 250
  },
  {
    "_id": "orderItem0002",
    "orderId": "order0001",
    "bookId": "book0002",
    "quantity": 1,
    "pricePerUnit": 120
  },
  // Items for order0002 (Total = 290 + 220 = 510)
  {
    "_id": "orderItem0003",
    "orderId": "order0002",
    "bookId": "book0003",
    "quantity": 1,
    "pricePerUnit": 290
  },
  {
    "_id": "orderItem0004",
    "orderId": "order0002",
    "bookId": "book0004",
    "quantity": 1,
    "pricePerUnit": 220
  },
  // Items for order0003 (Total = 195 = 195)
  {
    "_id": "orderItem0005",
    "orderId": "order0003",
    "bookId": "book0005",
    "quantity": 1,
    "pricePerUnit": 195
  },
  // Items for order0004 (Total = 265 = 265)
  {
    "_id": "orderItem0006",
    "orderId": "order0004",
    "bookId": "book0006",
    "quantity": 1,
    "pricePerUnit": 265
  },
  // Items for order0005 (Total = 250 + 180 = 430)
  {
    "_id": "orderItem0007",
    "orderId": "order0005",
    "bookId": "book0001",
    "quantity": 1,
    "pricePerUnit": 250
  },
  {
    "_id": "orderItem0008",
    "orderId": "order0005",
    "bookId": "book0008",
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0006 (Total = 150 = 150)
  {
    "_id": "orderItem0009",
    "orderId": "order0006",
    "bookId": "book0007",
    "quantity": 1,
    "pricePerUnit": 150
  },
  // Items for order0007 (Total = 290 + 180 = 470)
  {
    "_id": "orderItem0010",
    "orderId": "order0007",
    "bookId": "book0003",
    "quantity": 1,
    "pricePerUnit": 290
  },
  {
    "_id": "orderItem0011",
    "orderId": "order0007",
    "bookId": "book0008",
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0008 (Total = 180 = 180)
  {
    "_id": "orderItem0012",
    "orderId": "order0008",
    "bookId": "book0008",
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0009 (Total = 95 + 290 = 385)
  {
    "_id": "orderItem0013",
    "orderId": "order0009",
    "bookId": "book0009",
    "quantity": 1,
    "pricePerUnit": 95
  },
  {
    "_id": "orderItem0014",
    "orderId": "order0009",
    "bookId": "book0010",
    "quantity": 1,
    "pricePerUnit": 290
  },
  // Items for order0010 (Total = 290 = 290)
  {
    "_id": "orderItem0015",
    "orderId": "order0010",
    "bookId": "book0010",
    "quantity": 1,
    "pricePerUnit": 290
  }
]);

// Find all order items
db.order_items.find({});
