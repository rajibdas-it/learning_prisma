import express from "express";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const routes = [
  {
    pathName: "/user",
    routeName: userRoutes,
  },
];

routes.map((route) => router.use(route.pathName, route.routeName));

export default router;
