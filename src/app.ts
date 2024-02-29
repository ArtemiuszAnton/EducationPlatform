import express from 'express';
import { json } from 'body-parser';
import router from './controller/controller';
const app = express();

app.use(json());

app.use('/user', router);

app.use((er, _req, res, _next) => res.send(er.message))



export { app }