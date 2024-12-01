import express from "express";
import UserController from "../Controllers/Users";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id", UserController.getUser);
UserRouter.post("/", UserController.createUser);
UserRouter.post("/:user_id/borrow/:book_id", UserController.borrowBook);
UserRouter.post("/:user_id/return/:book_id", UserController.returnBook);

export default UserRouter;