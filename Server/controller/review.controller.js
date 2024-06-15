const Review = require("../model/review.mongo");
const Course = require("../model/courses.mongo");

// Add a new review
exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const courseId = req.params.courseId;

  const reviewExists = await Review.findOne({
    user: req.user._id,
    course: courseId,
  });

  if (reviewExists) {
    return res
      .status(400)
      .json({ message: "You have already reviewed this course" });
  }

  const review = new Review({
    user: req.user._id,
    course: courseId,
    rating,
    comment,
  });

  await review.save();

  // Update course rating
  const course = await Course.findById(courseId);
  course.reviews.push(review._id);
  course.numReviews += 1;
  course.rating =
    (course.rating * (course.numReviews - 1) + rating) / course.numReviews;
  await course.save();

  res.status(201).json({ message: "Review added" });
};

// Get reviews for a course
exports.getCourseReviews = async (req, res) => {
  const courseId = req.params.courseId;

  const reviews = await Review.find({ course: courseId }).populate(
    "user",
    "name"
  );

  res.status(200).json(reviews);
};
