use("my-ecommerce-business");

// Clear existing data
db.order_items.deleteMany({});

// Insert mock data for order items collection
db.order_items.insertMany([
  // Items for order0001 (Total = 250 + 120 = 370)
  {
    "_id": ObjectId("65f400000000000000000501"),
    "orderId": ObjectId("65f400000000000000000401"),
    "bookId": ObjectId("65f400000000000000000301"),
    "quantity": 1,
    "pricePerUnit": 250
  },
  {
    "_id": ObjectId("65f400000000000000000502"),
    "orderId": ObjectId("65f400000000000000000401"),
    "bookId": ObjectId("65f400000000000000000302"),
    "quantity": 1,
    "pricePerUnit": 120
  },
  // Items for order0002 (Total = 290 + 220 = 510)
  {
    "_id": ObjectId("65f400000000000000000503"),
    "orderId": ObjectId("65f400000000000000000402"),
    "bookId": ObjectId("65f400000000000000000303"),
    "quantity": 1,
    "pricePerUnit": 290
  },
  {
    "_id": ObjectId("65f400000000000000000504"),
    "orderId": ObjectId("65f400000000000000000402"),
    "bookId": ObjectId("65f400000000000000000304"),
    "quantity": 1,
    "pricePerUnit": 220
  },
  // Items for order0003 (Total = 195 = 195)
  {
    "_id": ObjectId("65f400000000000000000505"),
    "orderId": ObjectId("65f400000000000000000403"),
    "bookId": ObjectId("65f400000000000000000305"),
    "quantity": 1,
    "pricePerUnit": 195
  },
  // Items for order0004 (Total = 265 = 265)
  {
    "_id": ObjectId("65f400000000000000000506"),
    "orderId": ObjectId("65f400000000000000000404"),
    "bookId": ObjectId("65f400000000000000000306"),
    "quantity": 1,
    "pricePerUnit": 265
  },
  // Items for order0005 (Total = 250 + 180 = 430)
  {
    "_id": ObjectId("65f400000000000000000507"),
    "orderId": ObjectId("65f400000000000000000405"),
    "bookId": ObjectId("65f400000000000000000301"),
    "quantity": 1,
    "pricePerUnit": 250
  },
  {
    "_id": ObjectId("65f400000000000000000508"),
    "orderId": ObjectId("65f400000000000000000405"),
    "bookId": ObjectId("65f400000000000000000308"),
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0006 (Total = 150 = 150)
  {
    "_id": ObjectId("65f400000000000000000509"),
    "orderId": ObjectId("65f400000000000000000406"),
    "bookId": ObjectId("65f400000000000000000307"),
    "quantity": 1,
    "pricePerUnit": 150
  },
  // Items for order0007 (Total = 290 + 180 = 470)
  {
    "_id": ObjectId("65f40000000000000000050a"),
    "orderId": ObjectId("65f400000000000000000407"),
    "bookId": ObjectId("65f400000000000000000303"),
    "quantity": 1,
    "pricePerUnit": 290
  },
  {
    "_id": ObjectId("65f40000000000000000050b"),
    "orderId": ObjectId("65f400000000000000000407"),
    "bookId": ObjectId("65f400000000000000000308"),
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0008 (Total = 180 = 180)
  {
    "_id": ObjectId("65f40000000000000000050c"),
    "orderId": ObjectId("65f400000000000000000408"),
    "bookId": ObjectId("65f400000000000000000308"),
    "quantity": 1,
    "pricePerUnit": 180
  },
  // Items for order0009 (Total = 95 + 290 = 385)
  {
    "_id": ObjectId("65f40000000000000000050d"),
    "orderId": ObjectId("65f400000000000000000409"),
    "bookId": ObjectId("65f400000000000000000309"),
    "quantity": 1,
    "pricePerUnit": 95
  },
  {
    "_id": ObjectId("65f40000000000000000050e"),
    "orderId": ObjectId("65f400000000000000000409"),
    "bookId": ObjectId("65f40000000000000000030a"),
    "quantity": 1,
    "pricePerUnit": 290
  },
  // Items for order0010 (Total = 290 = 290)
  {
    "_id": ObjectId("65f40000000000000000050f"),
    "orderId": ObjectId("65f40000000000000000040a"),
    "bookId": ObjectId("65f40000000000000000030a"),
    "quantity": 1,
    "pricePerUnit": 290
  }
]);

// Find all order items
db.order_items.find({});
