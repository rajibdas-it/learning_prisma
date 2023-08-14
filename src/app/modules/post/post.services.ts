import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createNewPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPosts = async () => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};
export const postServices = { createNewPost, getAllPosts };
