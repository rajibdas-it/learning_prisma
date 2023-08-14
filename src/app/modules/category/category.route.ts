import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", categoryController.createNewCategory);

export const categoryRoute = router;
