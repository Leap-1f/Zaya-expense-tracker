import { sql } from "../../../config/database";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT*FROM USERS`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};