import { app } from "./app.js";
import {
    testAPI,
    getUsers,
    createUser,
    deleteUser,
} from "./modules/users/users.controller.js";

const port = 3000;



app.listen(port, () => {
  console.log(`Server running on port: ${port} ✅`);
});