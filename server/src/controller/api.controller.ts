import { Router, Request, Response } from 'express';
import { createUser, authUser } from '../service/api.service';
import { iUser } from '../interfaces/interfaces';
import buildResponse from '../helper/buildResponse';
const routeApi = Router();

routeApi.post('/reg', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createUser(name, surname, email, pwd);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(400, er.message, res);
  }
});

routeApi.post('/auth', async (req: Request, res: Response) => {
  try {
    const { email, pwd } = req.body;
    const data: iUser[] = await authUser(email, pwd);
    buildResponse(201, data, res);
  } catch (er: any) {
    buildResponse(404, er.message, res);
  }
});

export default routeApi;
