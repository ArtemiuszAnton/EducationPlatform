import { createCourse, getAllCourses, updateCourse } from "../../src/service/course.service";
import * as repository from '../../src/repository/course.repository';


describe('createCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JS', description: 'test' }]);
        const result = await createCourse('JS', 'test');
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith('JS', 'test');
        expect(result).toHaveLength(1);
    })

    test('error createCourse', async () => {
        try {
            const mock = jest.spyOn(repository, 'createCourseDB');
            mock.mockResolvedValue([]);
            const response = createCourse('Test', 'test');
        } catch (er: any) {
            expect(er.message).toBe('data not created');
        }
    })
})

describe('getAllCourses', () => {
    test('getAllCourses corrected work', async () => {
        const mock_1 = jest.spyOn(repository, 'getAllCoursesDB');
        mock_1.mockResolvedValue([
            { id: 1, course: 'Test1', description: 'test' },
            { id: 2, course: 'Test2', description: 'test' }
        ])
        const response = await getAllCourses();
        expect(mock_1).toHaveBeenCalled();
        expect(response).toHaveLength(2);
        expect(response).toEqual([
            { id: 1, course: 'Test1', description: 'test' },
            { id: 2, course: 'Test2', description: 'test' }
        ])
    });

    test('error getAllCourses', async () => {
        try {
            const mock_2 = jest.spyOn(repository, 'getAllCoursesDB');
            mock_2.mockResolvedValue([]);
            const response = await getAllCourses();
        } catch (er: any) {
            expect(er.message).toBe('data is empty');
        }
    })

})

describe('updateCourse', () => {
    test('updateCourse sucsess', async () => {
        const mock = jest.spyOn(repository, 'updateCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'Test1', description: 'test' }])
        const response = await updateCourse(1, 'Test1', 'test');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(1, 'Test1', 'test');
        expect(response).toHaveLength(1);
        expect(response).toEqual([{ id: 1, course: 'Test1', description: 'test' }]);
    });

    test('error updateCourse', async () => {
        try {
            const mock = jest.spyOn(repository, 'updateCourseDB');
            mock.mockResolvedValue([]);
            const response = await updateCourse(1, 'Test1', 'test');
        } catch (er: any) {
            expect(er.message).toBe('data is empty');
        }
    })
})



