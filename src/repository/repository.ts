import pool from '../db';

async function createDataDB(name: string, surname: string, email: string, pwd: string) {
    const client = await pool.connect()

    const sql = 'INSERT Into users (name, surname, email, pwd) Values ($1,$2,$3,$4) returning *'
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    return rows
}

async function getAllUserDB() {
    const client = await pool.connect()

    const sql = 'select * from users order by id asc'
    const { rows } = await client.query(sql);
    return rows
}

async function getAllUserByIdDB(id: number) {
    const client = await pool.connect()

    const sql = 'select * from users where id = $1 order by id asc'
    const { rows } = await client.query(sql, [id]);
    return rows
}

async function updateUserDB(id: number, name, surname, email, pwd) {
    const client = await pool.connect()

    const sql = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *'
    const { rows } = await client.query(sql, [name, surname, email, pwd, id]);
    return rows
}

async function deleteUserDB(id: number) {
    const client = await pool.connect()

    const sql = 'delete from users where id = $1 returning *'
    const { rows } = await client.query(sql, [id]);
    return rows
}

async function partUpdateUserDB(id: number, body) {
    const client = await pool.connect()

    const sql1 = 'select * from users where id = $1';
    const oldObj = (await client.query(sql1, [id])).rows;
    const newObj = { ...oldObj[0], ...body };
    const sql2 = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
    const { rows } = await client.query(sql2, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id]);
    return rows
}


export { createDataDB, getAllUserDB, getAllUserByIdDB, updateUserDB, deleteUserDB, partUpdateUserDB }