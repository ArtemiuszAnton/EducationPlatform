import { createData, getAllUser, getUserById, updateUser, deleteUser, partUpdateUser } from "../../src/service/user.service";
import * as repository from '../../src/repository/user.repository';

describe('createData', () => {
    test('corrected work', async () => {
        // const mock = jest.spyOn(repository, 'createDataDB');
        // mock.mockResolvedValue([{ id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: '12345678' }]);
        // const response = await createData('Artem', 'Andreev', 'artem@gmail.com', '12345678');
    });

    // test('uncorrected work', async () => {
    //     try {
    //         const mock = jest.spyOn(repository, 'createDataDB');
    //         mock.mockResolvedValue([]);
    //         const response = createData('Artem', 'Andreev', 'artem@gmail.com', '12345678');
    //     } catch (er: any) {
    //         expect(er.message).toBe('data do not create');
    //     }
    // })
})

// describe('getAllUser', () => {
//     test('corrected work', async () => {
//         const mock = jest.spyOn(repository, 'getAllUserDB');
//         mock.mockResolvedValue([
//             { id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: '12345678' },
//             { id: 2, name: 'Anton', surname: 'Anisimov', email: 'anton@gmail.com', pwd: '123456789' }
//         ]);
//         const response = await getAllUser();
//         expect(mock).toHaveBeenCalled();
//         expect(response).toHaveLength(2);
//         expect(response).toEqual([
//             { id: 1, name: 'Artem', surname: 'Andreev', email: 'artem@gmail.com', pwd: '12345678' },
//             { id: 2, name: 'Anton', surname: 'Anisimov', email: 'anton@gmail.com', pwd: '123456789' }
//         ])
//     })
// })