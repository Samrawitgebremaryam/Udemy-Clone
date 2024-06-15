const express = require("express");
const {
  addReview,
  getCourseReviews,
} = require("../controller/review.controller");
const router = express.Router();

// Add a review
router.route("/:courseId/review").post(addReview);

// Get reviews for a course
router.route("/:courseId/reviews").get(getCourseReviews);

module.exports = router;
