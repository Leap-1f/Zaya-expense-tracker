import { Router } from "express";
import { newUser, logIn, signin } from "../controller/user.js";

const user = Router();

user.route("/signup").post(newUser);
user.route("/login").post(logIn);

export { user };

// user.route("/login").post(login);
user.route("/signin").post(signin);
// user.route("/signup").post(postUser);
// user.route("/user/table").post(createTable).delete(dropTable);

// export { user };
