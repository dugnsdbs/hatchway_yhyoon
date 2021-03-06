import PostMessages from "../models/postMessages.js"
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessages.find();
    res.status(200).json(postMessage)

  } catch (error) {
    res.states(404).json({message: error.message})
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessages.findById(id);
    res.status(200).json(post)
  } catch (error) {
    res.states(404).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessages(post)
  
  try {
  await newPost.save()
  res.status(200).json(newPost)
  } catch (error) {
    res.states(400).json({message: error.message})
  }
}

export const updatePost = async(req, res) => {
  const { id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id')
  const updatePost = await PostMessages.findByIdAndUpdate(id, {...post, id}, { new: true })
  res.json(updatePost)
}

export const deletePost = async(req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id')

  await PostMessages.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully"})
}

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await PostMessages.findById(id);

  post.comments.push(value);

  const updatedPost = await PostMessages.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost)

}