import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { profileRoute } from "../modules/profile/profile.route";
import { categoryRoute } from "../modules/category/category.route";
import { postRoute } from "../modules/post/post.route";

const router = express.Router();

const routes = [
  {
    pathName: "/user",
    routeName: userRoutes,
  },
  {
    pathName: "/profile",
    routeName: profileRoute,
  },
  {
    pathName: "/category",
    routeName: categoryRoute,
  },
  {
    pathName: "/post",
    routeName: postRoute,
  },
];

routes.map((route) => router.use(route.pathName, route.routeName));

export default router;
