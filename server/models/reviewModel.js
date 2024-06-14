const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor", // Reference to the Doctor model
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
reviewSchema.index({ doctorId: 1, userId: 1 }, { unique: true });
const Review = mongoose.model("Review", reviewSchema);
//Review.createIndexes({ doctorId: 1, userId: 1 }, { unique: true });

module.exports = Review;
