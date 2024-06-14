const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
    {
        title: { type: String, required: true },
        instructor: { type: Schema.Types.ObjectId, ref: "Instructor" }, // Not required
        price: { type: Number, min: 0 }, // Not required
        thumbnails: { type: [String] }, // Not required
        originalPrice: { type: Number, min: 0 }, // Not required
        duration: { type: Number, min: 0 }, // Not required
        lectures: { type: Number, min: 0 }, // Not required
        description: { type: String }, // Not required
        level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }, // Not required
        videoUrl: { type: String }, // Not required
        tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }], // Not required
        isDeleted: { type: Boolean, default: false },
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], // Not required
        category: { type: Schema.Types.ObjectId, ref: "Category" }, // Not required
        enrolledUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Not required
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


