import pool from '../db';
import { iUser } from '../interfaces/interfaces';

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'INSERT INTO users (name, surname, email, pwd) VALUES ($1,$2,$3,$4) RETURNING *';
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    await client.query('COMMIT');
    return rows;
  } catch (er: any) {
    await client.query('ROLLBACK');
    console.log(er.message);
    return [];
  }
}

async function getUserByEmailDB(email: string): Promise<iUser[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM users WHERE email = $1';
  const { rows } = await client.query(sql, [email]);
  return rows;
}

export { createUserDB, getUserByEmailDB };
