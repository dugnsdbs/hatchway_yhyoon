import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rate: { type: String, required: true },
  comment: { type: String, required: true },
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

