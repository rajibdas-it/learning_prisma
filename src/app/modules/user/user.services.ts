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

const deleteUser = async (id: number): Promise<User | number> => {
  const result = await prisma.user.delete({ where: { id } });
  return result;
};

const updateUser = async (id: number, payload: Partial<User>) => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
