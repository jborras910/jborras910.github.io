db.collection.aggregate([
  {
    $sort: { timestamp: -1 },
  },
  {
    $limit: 100,
  },
]);
