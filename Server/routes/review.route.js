const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const {
  addReview,
  getCourseReviews,
} = require("../controller/review.controller");
const router = express.Router();

// Add a review
router.route("/:courseId/review").post(protect, addReview);

// Get reviews for a course
router.route("/:courseId/reviews").get(getCourseReviews);

module.exports = router;
