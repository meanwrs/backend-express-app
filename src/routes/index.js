import {Router} from "express";
import {router as v1Routers} from "./v1/index.js";
import {router as v2Routers} from "./v2/index.js";

export const router = Router();

router.use("/v1",v1Routers);
router.use("/v2",v2Routers);