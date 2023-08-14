import { HttpStatus } from "http-status";

import { RequestHandler } from "express";
import { categoryServices } from "./category.services";

const createNewCategory: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await categoryServices.createNewCategory(data);
    res.status(200).json({
      success: true,
      message: "category created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const categoryController = {
  createNewCategory,
};
