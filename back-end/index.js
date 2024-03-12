import express from "express";
import cors from "cors";
import {user} from "./src/router/user.js";
import { transaction } from "./src/router/transaction.js";
import { category } from "./src/router/category.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

app.use("/api/", user);
app.use("/api/category", category);
app.use("/api/transaction", transaction);

app.listen(port, () => {
  console.log(`ene port deer server aslaa ${port}`);
});

