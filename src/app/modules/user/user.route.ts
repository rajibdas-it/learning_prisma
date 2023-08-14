import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/:id", userController.getSingleUser);
router.delete("/:id", userController.deleteUser);
router.patch("/update-user/:id", userController.updateUser);
router.get("/", userController.getAllUsers);

export const userRoutes = router;
