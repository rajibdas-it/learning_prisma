import { RequestHandler } from "express";
import httpStatus from "http-status";
import { postServices } from "./post.services";

const createNewPost: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await postServices.createNewPost(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "create new post successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts: RequestHandler = async (req, res) => {
  try {
    console.log(req.query);
    const options = req.query;
    const result = await postServices.getAllPosts(options);
    res.status(httpStatus.OK).json({
      success: true,
      message: "All post retrived successfully",
      count: result.total,
      data: result.result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  createNewPost,
  getAllPosts,
};
