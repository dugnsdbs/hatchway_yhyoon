import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  rate: String,
  comment: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const PostMessages = mongoose.model("PostMessages", postSchema)

export default PostMessages;

