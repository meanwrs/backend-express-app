import {Router} from "express";
import{
    getUsers2,
    getUser2,
    createUser2,
    deleteUser2,
    updateUser2,
} from "../../modules/users/users.controller.js";

export const router = Router();

router.get("/", getUsers2);


router.get("/:id", getUser2);

router.post("/", createUser2);

// The function inside is called Route Handler / Controller
router.delete("/:id", deleteUser2);

router.patch("/:id",updateUser2);