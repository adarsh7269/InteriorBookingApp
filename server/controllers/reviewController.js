const Review = require("../models/reviewModel");

const addreview = async (req, res) => {
  //console.log("yha tk aa gya", req.body);
  try {
    const review = await Review({
      rating: req.body.rating,
      comment: req.body.comment,
      doctorId: req.body.doctorId,
      userId: req.locals,
    });
    const result = await review.save();
    db.reviews.createIndex({ productId: 1, userId: 1 }, { unique: true });

    console.log("inside addreview", review);
    if (!result) {
      return res.status(500).send("Unable to add revw");
    }
    return res.status(201).send("Review added successfully");
  } catch (error) {
    console.log("in catch");
    res.status(500).send("Unable to add revi");
  }
};

module.exports = {
  addreview,
};
