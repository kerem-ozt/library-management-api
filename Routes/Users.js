import express from "express";
import UserController from "../Controllers/Users";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id", UserController.getUser);
UserRouter.post("/", UserController.createUser);
//localhost:3000/users/1/borrow/1
UserRouter.post("/:user_id/borrow/:book_id", UserController.borrowBook);
//localhost:3000/users/1/return/1
UserRouter.post("/:user_id/return/:book_id", UserController.returnBook);

export default UserRouter;