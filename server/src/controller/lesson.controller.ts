import { Router, Request, Response } from 'express';
import { createLesson, getAllLessons, updateLesson, deleteLesson, getLessonByIdCourse } from '../service/lessons.service';
import buildResponse from '../helper/buildResponse';
const routeLesson = Router();

routeLesson.post('/', async (req: Request, res: Response) => {
    try {
        const { title, course_id } = req.body;
        const data = await createLesson(title, course_id);
        buildResponse(201, data, res);
    } catch (er: any) {
        buildResponse(400, er.message, res);
    }
});

routeLesson.get('/', async (_req: Request, res: Response) => {
    try {
        const data = await getAllLessons();
        buildResponse(200, data, res);
    } catch (er: any) {
        buildResponse(404, er.message, res);
    }
});

routeLesson.get('/:course_id', async (req: Request, res: Response) => {
    try {
        const { course_id } = req.params;
        const data = await getLessonByIdCourse(course_id)
            ;
        buildResponse(200, data, res);
    } catch (error: any) {
        buildResponse(400, error.message, res);
    }
});

routeLesson.put('/:id', async (req: Request, res: Response) => {
    try {
        const { title, course_id } = req.body;
        const { id } = req.params;
        const data = await updateLesson(id, title, course_id);
        buildResponse(200, data, res);
    } catch (er: any) {
        buildResponse(404, er.message, res);
    }
});

routeLesson.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await deleteLesson(id);
        buildResponse(200, data, res);
    } catch (er: any) {
        buildResponse(404, er.message, res);
    }
});


export default routeLesson;