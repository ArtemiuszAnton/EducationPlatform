import bcrypt from 'bcrypt';
import { iUser } from '../interfaces/interfaces';
import { createUserDB, getUserByEmailDB } from '../repository/api.repository';

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const user: iUser[] = await getUserByEmailDB(email);
  if (user.length) throw new Error('user already exists');

  const salt = 4;
  const hashPwd = await bcrypt.hash(pwd, salt);
  
  const data: iUser[] = await createUserDB(name, surname, email, hashPwd);
  if (!data.length) throw new Error('data do not create');
  return data;
}

async function authUser(email: string, pwd: string): Promise<iUser[]> {
  const auth: iUser[] = await getUserByEmailDB(email);
  if (!auth.length) throw new Error('user not found');
  const isValidPwd: boolean = await bcrypt.compare(pwd, auth[0].pwd);
  if (!isValidPwd) throw new Error('wrong password');
  return auth;
}

export { createUser, authUser };
