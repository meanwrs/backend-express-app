import {Router} from "express";
import {router as userRouters} from "./user.routes.js";

export const router =Router();

router.use("/users",userRouters);