const tagSchema = new Schema({
    name: { type: String, required: true, unique: true }
  });
  
  const Tag = model("Tag", tagSchema);
  module.exports = Tag;
  