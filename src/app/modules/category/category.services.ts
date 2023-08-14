import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createNewCategory = async (data: Category) => {
  const result = await prisma.category.create({ data });
  return result;
};

export const categoryServices = { createNewCategory };
