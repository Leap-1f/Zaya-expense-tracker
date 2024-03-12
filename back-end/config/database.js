// app.js

import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.PGDATABASE);

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const PGHOST = "ep-gentle-paper-a5ehqtdl.us-east-2.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "ZayaGithub";
const PGPASSWORD = "YI2Up7rODMfm";
const ENDPOINT_ID = "ep-gentle-paper-a5ehqtdl";

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});
