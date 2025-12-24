import {Router} from "express";
import{
    testAPI,
    getUsers,
    createUser,
    deleteUser,
} from "../../modules/users/users.controller.js";

export const router = Router();

router.get("/test",testAPI);

router.get("/", getUsers);

router.post("/", createUser);

// The function inside is called Route Handler / Controller
router.delete("/:id", deleteUser);