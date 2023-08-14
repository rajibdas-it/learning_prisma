import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createNewPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm } = options;
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
    orderBy:
      sortBy && sortOrder ? { [sortBy]: sortOrder } : { authorId: "asc" },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            email: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
  });
  const total = await prisma.post.count();
  return { result, total };
};
export const postServices = { createNewPost, getAllPosts };
