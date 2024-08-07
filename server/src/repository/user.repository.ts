import pool from '../db';
import { iUser } from '../interfaces/interfaces';

async function createDataDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
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
  } finally {
    client.release();
  }
}

async function getAllUserDB(): Promise<iUser[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM users ORDER BY id ASC';
  const { rows } = await client.query(sql);
  client.release();
  return rows;
}
async function getUserByIdDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM users WHERE id = $1 ORDER BY id ASC';
  const { rows } = await client.query(sql, [id]);
  client.release();
  return rows;
}

async function updateUserDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const { rows } = await client.query(sql, [name, surname, email, pwd, id]);
    await client.query('COMMIT');
    return rows;
  } catch (er: any) {
    await client.query('ROLLBACK');
    console.log(er.message);
    return [];
  } finally {
    client.release();
  }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const { rows } = await client.query(sql, [id]);
    await client.query('COMMIT');
    return rows;
  } catch (er: any) {
    await client.query('ROLLBACK');
    console.log(er.message);
    return [];
  } finally {
    client.release();
  }
}

async function partUpdateUserDB(id: number, body: iUser): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql1: string = 'SELECT * FROM users WHERE id = $1';
    const oldObj: iUser[] = (await client.query(sql1, [id])).rows;
    const newObj: iUser = { ...oldObj[0], ...body };
    const sql2: string = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const { rows } = await client.query(sql2, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id]);
    await client.query('COMMIT');
    return rows;
  } catch (er: any) {
    await client.query('ROLLBACK');
    console.log(er.message);
    return [];
  } finally {
    client.release();
  }
}

export { createDataDB, getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB, partUpdateUserDB };
