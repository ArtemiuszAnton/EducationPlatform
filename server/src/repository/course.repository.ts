import pool from '../db';
import { iCourse } from '../interfaces/interfaces';

async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'INSERT INTO courses (course, description) VALUES ($1,$2) RETURNING *';
    const { rows } = await client.query(sql, [course, description]);
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

async function getAllCoursesDB() {
  const client = await pool.connect();
  const sql: string = 'SELECT * FROM courses ORDER BY id ASC';
  const { rows } = await client.query(sql);
  client.release();
  return rows;
}

async function getCourseByIdDB(id: string): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql: string = 'select * from courses where id = $1';
  const { rows } = await client.query(sql, [id]);
  client.release();
  return rows;
}


async function updateCourseDB(id: number, course: string, description: string) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'UPDATE courses SET course = $1, description = $2 WHERE id = $3 RETURNING *';
    const { rows } = await client.query(sql, [course, description, id]);
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

async function deleteCourseDB(id: number) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'DELETE FROM courses WHERE id = $1 RETURNING *';
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

async function updateCourseInfoDB(id: number, body: iCourse) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql1: string = 'SELECT * FROM courses WHERE id = $1';
    const oldObj = (await client.query(sql1, [id])).rows;
    const newObj = { ...oldObj[0], ...body };
    const sql2: string = 'UPDATE courses SET course = $1, description = $2 WHERE id = $3 RETURNING *';
    const { rows } = await client.query(sql2, [newObj.course, newObj.description, id]);
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

export { createCourseDB, getAllCoursesDB, updateCourseDB, deleteCourseDB, updateCourseInfoDB, getCourseByIdDB};
