import { RequestHandler } from "express";
import httpStatus from "http-status";
import { userServices } from "./user.services";

const createUser: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await userServices.createUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const result = await userServices.getAllUsers();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Users retrived successfully",
      count: result.count,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userServices.getSingleUser(parseInt(id));
    res.status(httpStatus.OK).json({
      success: true,
      message: "user retrived successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userServices.deleteUser(parseInt(id));
    res.status(httpStatus.OK).json({
      success: true,
      message: "User delete successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const result = await userServices.updateUser(parseInt(id), payload);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User update successfully",
      count: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
