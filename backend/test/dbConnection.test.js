import pool from "../config/db.config.js";
import "../config/env.config.js";

async function testConnection() {
  console.log(
    "UserName:",
    process.env.PGUSER,
    "\nPassword:",
    process.env.PGPASSWORD,
    "\nHost:",
    process.env.PGHOST,
    "\nDB Name:",
    process.env.PGDATABASE
  );
  try {
    const conexao = await pool.query("SELECT NOW()");
    console.log(conexao.rows[0]);
  } catch (erro) {
    console.error("Aconteceu algum erro: ", erro.message);
  } finally {
    pool.end();
  }
}

testConnection();
