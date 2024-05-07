const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Comment = model("Comment", commentSchema);
  module.exports = Comment;
  