
import mongoose from "mongoose";

// Defining Schema for mongodb
const postSchema = new mongoose.Schema({
  title : { type: String, required: true, trim: true },
  body : { type: String, required: true, trim: true }
})

// Compiling the Schema
const Post= mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post