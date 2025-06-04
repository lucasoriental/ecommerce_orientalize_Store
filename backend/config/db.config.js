import { Pool } from "pg";
import "./env.config.js";


const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;

const database_URL = `postgres://${user}:${password}@${host}/${database}`;

const pool = new Pool({
  connectionString: database_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
 
export default pool;