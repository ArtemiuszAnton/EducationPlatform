import { Router, Request, Response } from 'express';
import { createCourse, getAllCourses, updateCourse, deleteCourse, updateCourseInfo } from '../service/course.service';
import buildResponse from '../helper/buildResponse';
import { iCourse } from '../interfaces/interfaces';
const routeCourse = Router();

routeCourse.post('/', async (req: Request, res: Response) => {
  try {
    const { course, description } = req.body;
    const data: iCourse[] = await createCourse(course, description);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(400, er.message, res);
  }
});

routeCourse.get('/', async (_req: Request, res: Response) => {
  try {
    const data: iCourse[] = await getAllCourses();
    buildResponse(200, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

routeCourse.put('/:id', async (req: Request, res: Response) => {
  try {
    const { course, description } = req.body;
    const { id } = req.params;
    const data = await updateCourse(id, course, description);
    buildResponse(200, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

routeCourse.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await deleteCourse(id);
    buildResponse(200, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

routeCourse.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: iCourse = req.body;
    const data: iCourse[] = await updateCourseInfo(id, body);
    buildResponse(200, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

export default routeCourse;
