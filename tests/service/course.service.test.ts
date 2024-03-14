import { createCourse,getAllCourses } from "../../src/service/course.service";
import * as repository from '../../src/repository/course.repository';


describe('createCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JS', description: 'test' }]);
        const result = await createCourse('JS', 'test');
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith('JS','test');
        expect(result).toHaveLength(1);
    })
})

describe('getAllCourses', ()=>{
    test('corrected', async ()=>{
        const mock = jest.spyOn(repository, 'getAllCoursesDB');
        // mock.mockResolvedValue()
    })
})