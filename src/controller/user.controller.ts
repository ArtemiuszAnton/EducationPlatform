import { Router, Request, Response } from 'express';
import { createData, getAllUser, getUserById, updateUser, deleteUser, partUpdateUser } from '../service/user.service';
import buildResponse from '../helper/buildResponse';
import { iUser } from '../interfaces/interfaces';
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createData(name, surname, email, pwd);
    res.status(200).send(data);
  } catch (er: any) {
    buildResponse(400, er.message, res);
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const data: iUser[] = await getAllUser();
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await getUserById(id);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await updateUser(id, name, surname, email, pwd);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await deleteUser(id);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: iUser = req.body;
    const data: iUser[] = await partUpdateUser(id, body);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

export default router;
