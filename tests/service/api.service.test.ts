import { createUser } from '../../src/service/api.service';
import bcrypt from 'bcrypt';
import * as repository from '../../src/repository/api.repository';


describe('createUser', () => {
    test('corrected', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmailDB');

    })
})
