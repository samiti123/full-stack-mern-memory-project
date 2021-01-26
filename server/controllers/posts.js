import postMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const newPost = new postMessage({
    title: req.body.title,
    message: req.body.message,
    creator: req.body.creator,
    tags: req.body.tags,
    selectedFile: req.body.selectedFile,
  });

  try {
    return await newPost.save();

    // https://www.restapitutorial.com/httpstatuscodes.html

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
