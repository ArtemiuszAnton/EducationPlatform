import { iCourse } from '../interfaces/interfaces';
import { createCourseDB, getAllCoursesDB, updateCourseDB } from '../repository/course.repository';

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await createCourseDB(course, description);
    return data
}

async function getAllCourses(): Promise<iCourse[]> {
    const data: iCourse[] = await getAllCoursesDB();
    return data
}

async function updateCourse(id: number, course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await updateCourseDB(id, course, description);
    return data
}

export { createCourse, getAllCourses, updateCourse }