const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
    {
        title: { type: String, required: true },
        instructor: { type: Schema.Types.ObjectId, ref: "Instructor", required: true },
        price: { type: Number, required: true, min: 0 },
        thumbnails: { type: [String], required: true },
        originalPrice: { type: Number, required: true, min: 0 },
        duration: { type: Number, required: true, min: 0 },
        lectures: { type: Number, required: true, min: 0 },
        description: { type: String, required: true },
        level: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
        videoUrl: { type: String, required: true },
        tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
        isDeleted: { type: Boolean, default: false },
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        enrolledUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
        rating: { type: Number, default: 0, min: 0, max: 5 },
        ratingsCount: { type: Number, default: 0 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false // Disabling versioning
    }
);

module.exports = model("Course", courseSchema);
