import { Router, Request, Response } from 'express';
import { createCourse, getAllCourses, updateCourse } from '../service/course.service'
import { iCourse } from '../interfaces/interfaces'
const routeCourse = Router();

routeCourse.post('/', async (req: Request, res: Response) => {
    try {
        const { course, description } = req.body;
        const data: iCourse[] = await createCourse(course, description);
        res.status(200).send(data)
    } catch (er: any) {
        res.status(400).send(er.message)
    }
})

routeCourse.get('/', async (_req: Request, res: Response) => {
    try {
        const data: iCourse[] = await getAllCourses();
        res.status(200).send(data)
    } catch (er: any) {
        res.status(404).send(er.message)
    }
})

routeCourse.put('/:id', async (req: Request, res: Response) => {
    try {
        const { course, description } = req.body;
        const { id } = req.params;
        const data = await updateCourse(id, course, description);
        res.status(200).send(data)
    } catch (er: any) {
        res.status(404).send(er.message)
    }
})

export default routeCourse;
