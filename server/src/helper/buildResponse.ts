import { Response } from 'express';
import { iCourse, iUser } from '../interfaces/interfaces';

type MessageType = iUser | iUser[] | iCourse | iCourse[] | string;

function buildResponse(status: number, message: MessageType, res: Response): void {
  res.status(status);
  res.send(message);
}

export default buildResponse;
