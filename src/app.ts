import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import router from './controller/user.controller';
import routeCourse from './controller/course.controller';
const app = express();

app.use(json());

app.use('/user', router);
app.use('/course', routeCourse)

app.use((er: any, _req: Request, res: Response, _next: NextFunction) => res.send(er.message))



export { app }