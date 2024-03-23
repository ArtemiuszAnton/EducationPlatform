import supertest from 'supertest';
import { app } from '../../src/app';

let id: number;

test('POST/user', async () => {
    const res = await supertest(app).post('/user').send({ name: 'Test', surname: 'Testovich', email: 'testov123@gmail.com', pwd: '12345test' });
    id = res.body[0].id;
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
});

test('GET/user', async () => {
    const res = await supertest(app).get('/user');
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBeGreaterThan(0);
});


test('GET/user', async () => {
    const res = await supertest(app).get(`/user/${id}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBeGreaterThan(0);
})

test('PUT/user', async () => {
    const res = await supertest(app).put(`/user/${id}`).send({ name: 'Test', surname: 'Testov', email: 'testov123@gmail.com', pwd: '12345test' });
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe('Test');
    expect(res.body[0].surname).toBe('Testov');
})


test('DELETE/user', async () => {
    const res = await supertest(app).delete(`/user/${id}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBeGreaterThan(0);
})


