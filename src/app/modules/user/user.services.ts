import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllUsers = async () => {
  const data = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
    },
  });
  const count = await prisma.user.count();
  return { data, count };
};

const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      role: true,
    },
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
};
