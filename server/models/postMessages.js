import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  rate: String,
  comment: String,
  name: String, 
  selectedFile: String,
  comments: {type: [String], default:[]},
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const PostMessages = mongoose.model("PostMessages", postSchema)

export default PostMessages;

