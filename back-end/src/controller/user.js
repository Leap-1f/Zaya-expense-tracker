import { sql } from "../../config/database";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT*FROM users`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, password, email, currencyType, amount } = req.body;
    const salt =  bcrypt.genSaltSync(1);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = await sql `SELECT * FROM users`;
    const newUser = await sql `INSERT INTO users(email, name, password, currency_type, amount) VALUES(${email}, ${name}, ${hashedPassword}, ${currencyType}, ${amount}) RETURNING *`;
    data.push(newUser);
    res.send({success: true, statusCode: 201 });
  } catch(err) {
    console.log(err);
  }
};

export const createTable = async (req, res) => {
  try {
    const data = await sql `REATE TABLE users(id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    email VARCHAR(50) UNIQUE NOT NULL, 
    name VARCHAR(50) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    avatar_img TEXT, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    currency_type TEXT DEFAULT 'MNT',
    amount INT NOT NULL)`;
    res.send(`users table is created`);
  } catch (err) {
    console.log(err);
  }
};

export const dropTable = async (req, res) => {
  try {
    const data = await sql `DROP TABLE users`;
    res.send(`users table was deleted`);
  } catch(err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await sql `SELECT * FROM users where email=${email}`;
    if (data.length === 0) {
      res.send({
        message: "noData",
        data: null,
      });
      return;
    }
    const isValid = await bcrypt.compare(password, data[0].password);
    if (isValid) {
      res.send({
        success: true,
        statusCode: 200,
        user: { userId: data.id, email: data.email, password: data.password },
      });
    } else {
      res.send({
        message: "failed",
        data: null,
      });
    }
  } catch(err) {
    console.log(err);
  }
};

export const signin = async(req, res) => {
  try {
    const {email} = req.body;
    const data = await sql `SELECT * FROM users where email=${email}`;
    if (data.length === 1) {
      res.send({
        message: "This email is registered.",
      });
    } else if (data.length === 0) {
      res.send({
        success: true,
        statusCode: 200,
      });
    }
  } catch(err) {
    console.log(err);
  }
};
