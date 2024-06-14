const express = require("express");
const auth = require("../middleware/auth");
const reviewController = require("../controllers/reviewController");
const reviewRouter = express.Router();

reviewRouter.post("/addreview", auth, reviewController.addreview);

module.exports = reviewRouter;
