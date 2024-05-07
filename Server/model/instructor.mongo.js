const instructorSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String },
    profilePicture: { type: String }, // URL to the instructor's profile picture
  });
  
  const Instructor = model("Instructor", instructorSchema);
  module.exports = Instructor;
  