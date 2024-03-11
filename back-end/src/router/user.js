import { Router } from "express";
import { getAllUsers, createTable, dropTable, postUser, login, signin, } from "../../back-end/src/controller/user.js";

const user = Router();

user.route("/login").post(login);
user.route("/signin").post(signin);
user.route("/signup").get(getAllUsers).post(postUser);
user.route("/user/table").post(createTable).delete(dropTable);

export { user };