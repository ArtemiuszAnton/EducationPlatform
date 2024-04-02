import { createUser, authUser } from '../../src/service/api.service';
import bcrypt from 'bcrypt';
import * as repository from '../../src/repository/api.repository';

describe('createUser', () => {
    test('corrected', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmailDB');
        const mock_2 = jest.spyOn(bcrypt, 'hash');
        const mock_3 = jest.spyOn(repository, 'createUserDB');

        mock_1.mockResolvedValue([]);
        mock_2.mockResolvedValue('sdfsfksoffkksfff');
        mock_3.mockResolvedValue([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);

        const result = await createUser('Artem', 'Andreev', 'artem@gmail.com', '12345678');

        expect(mock_1).toHaveBeenCalled();
        expect(mock_2).toHaveBeenCalled();
        expect(mock_3).toHaveBeenCalled();

        expect(mock_1).toHaveBeenCalledWith('artem@gmail.com');
        expect(mock_2).toHaveBeenCalledWith('12345678', 4);
        expect(mock_3).toHaveBeenCalledWith('Artem', 'Andreev', 'artem@gmail.com', 'sdfsfksoffkksfff');

        expect(result).toEqual([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);
        expect(result).toHaveLength(1)
    })

    test('uncorrected_1', async () => {
        const mock = jest.spyOn(repository, 'getUserByEmailDB');

        try {
            mock.mockResolvedValue([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);
            await createUser('Artem', 'Andreev', 'artem@gmail.com', '12345678')
        } catch (er: any) {
            expect(mock).toHaveBeenCalled();
            expect(er.message).toBe('user already exists')
        }
    });

    test('uncorrected_2', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmailDB');
        const mock_2 = jest.spyOn(bcrypt, 'hash');
        const mock_3 = jest.spyOn(repository, 'createUserDB');
        try {
            mock_1.mockResolvedValue([]);
            mock_2.mockResolvedValue('sdfsfksoffkksfff');
            mock_3.mockResolvedValue([]);

            await createUser('Artem', 'Andreev', 'artem@gmail.com', '12345678')
        } catch (er: any) {
            expect(mock_1).toHaveBeenCalled();
            expect(mock_2).toHaveBeenCalled();
            expect(mock_3).toHaveBeenCalled();
            expect(er.message).toBe('data do not create')
        }
    })
});

describe('authUser', () => {
    test('authUser corrected work', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmailDB');
        const mock_2 = jest.spyOn(bcrypt, 'compare');

        mock_1.mockResolvedValue([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);
        mock_2.mockResolvedValue(true);

        const result = await authUser('artem@gmail.com', '12345678');

        expect(mock_1).toHaveBeenCalled();
        expect(mock_2).toHaveBeenCalled();
        expect(mock_1).toHaveBeenCalledWith('artem@gmail.com');
        expect(mock_2).toHaveBeenCalledWith('12345678', 'sdfsfksoffkksfff');

        expect(result).toEqual([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);
    });

    test('uncorrected email', async () => {
        const mock = jest.spyOn(repository, 'getUserByEmailDB');

        try {
            mock.mockResolvedValue([]);
            await authUser('artem@gmail.com', 'sdfsfksoffkksfff')
        } catch (er: any) {
            expect(mock).toHaveBeenCalled();
            expect(er.message).toBe('user not found')
        }
    });

    test('uncorrected password', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmailDB');
        const mock_2 = jest.spyOn(bcrypt, 'compare');
        
        try {
            mock_1.mockResolvedValue([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: 'sdfsfksoffkksfff' }]);
            mock_2.mockResolvedValue(false);
          

            await authUser('artem@gmail.com', 'sdfsfksoffkksfff')
        } catch (er: any) {
            expect(mock_1).toHaveBeenCalled();
            expect(mock_2).toHaveBeenCalled();
    
            expect(er.message).toBe('wrong password')
        }
    })
})