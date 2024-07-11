import { iCourse } from '../interfaces/interfaces';
import { createCourseDB, getAllCoursesDB, updateCourseDB, deleteCourseDB, updateCourseInfoDB, getCourseByIdDB } from '../repository/course.repository';

async function createCourse(course: string, description: string): Promise<iCourse[]> {
  const data: iCourse[] = await createCourseDB(course, description);
  if (!data.length) throw new Error('data not created');
  return data;
}

async function getAllCourses(): Promise<iCourse[]> {
  const data: iCourse[] = await getAllCoursesDB();
  if (!data.length) throw new Error('data is empty');
  return data;
}

async function getCourseById(id: string): Promise<iCourse[]> {
  const data: iCourse[] = await getCourseByIdDB(id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateCourse(id: number, course: string, description: string): Promise<iCourse[]> {
  const data: iCourse[] = await updateCourseDB(id, course, description);
  if (!data.length) throw new Error('data is empty');
  return data;
}

async function deleteCourse(id: number): Promise<iCourse[]> {
  const data: iCourse[] = await deleteCourseDB(id);
  return data;
}

async function updateCourseInfo(id: number, body: iCourse): Promise<iCourse[]> {
  const data: iCourse[] = await updateCourseInfoDB(id, body);
  return data;
}

export { createCourse, getAllCourses, updateCourse, deleteCourse, updateCourseInfo, getCourseById };
