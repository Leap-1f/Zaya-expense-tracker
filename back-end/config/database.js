import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

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

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }

// getPgVersion();
