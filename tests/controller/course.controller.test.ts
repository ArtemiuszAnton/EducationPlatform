import supertest from 'supertest';
import { app } from '../../src/app';

let id: number;

test('POST/course', async () => {
    const result = await supertest(app).post('/course').send({ course: 'Test', description: 'Testtest' });
    id = result.body[0].id;
    expect(result.statusCode).toBe(201);
    expect(result.body.length).toBeGreaterThan(0);

});

test('GET/course', async () => {
    const result = await supertest(app).get('/course');

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
});

test('PUT/course', async () => {
    const result = await supertest(app).put(`/course/${id}`).send({ course: 'Test', description: 'Testtest' });

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
    expect(result.body[0].description).toBe('Testtest');
    expect(result.body[0].course).toBe('Test');
});

test('PATCH/course', async () => {
    const result = await supertest(app).patch(`/course/${id}`).send({course: 'Test'});

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
});

test('DELETE/course', async () => {
    const result = await supertest(app).delete(`/course/${id}`);
    
    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
})

