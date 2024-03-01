import pool from '../db';
import { iCourse } from '../interfaces/interfaces';

async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql: string = 'INSERT INTO courses (course, description) VALUES ($1,$2) RETURNING *';
    const { rows } = await client.query(sql, [course, description]);
    return rows
}

async function getAllCoursesDB() {
    const client = await pool.connect();
    const sql: string = 'SELECT * FROM courses order by id asc';
    const { rows } = await client.query(sql);
    return rows
}

async function updateCourseDB(id: number, course: string, description: string) {
    const client = await pool.connect();
    const sql: string = 'UPDATE courses SET course = $1, description = $2 WHERE id = $3 RETURNING *';
    const { rows } = await client.query(sql, [course, description, id]);
    return rows
}

export { createCourseDB, getAllCoursesDB, updateCourseDB }
