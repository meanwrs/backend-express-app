import {Router} from "express";
import{

    getUsers1,
    createUser1,
    deleteUser1,
} from "../../modules/users/users.controller.js";

export const router = Router();



router.get("/", getUsers1);

router.post("/", createUser1);

// The function inside is called Route Handler / Controller
router.delete("/:id", deleteUser1);