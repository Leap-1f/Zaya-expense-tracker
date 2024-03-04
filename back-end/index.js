import express from "express";
import { sql } from "./config/database.js";

const app = express();
app.use(express.json());
const port = 8080;

app.use("users", user);

app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send(data);
});
app.post("/users/createTable", async (req, res) => {
  const data =
    await sql`CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`;
  data.push(req.body);
  res.send(data);
});
app.post("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  const newData =
    await sql`INSERT INTO users(name, email) VALUES('zul', 'zol') RETURNING *`;
  data.push(newData);
  res.send(data);
});

app.delete("/users", async (req, res) => {
  const data = await sql`DROP TABLE users`;
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`ene port ${port}`);
});
