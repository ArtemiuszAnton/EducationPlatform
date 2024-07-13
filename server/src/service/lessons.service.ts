// import { iCourse } from '../interfaces/interfaces';
import { createLessonDB, getAllLessonsDB, updateLessonDB, deleteLessonDB, getLessonByIdCourseDB } from '../repository/lessons.repository';

async function createLesson(title: string, course_id: number) {
    const data = await createLessonDB(title, course_id);
    if (!data.length) throw new Error('data not created');
    return data;
}

async function getAllLessons() {
    const data = await getAllLessonsDB();
    if (!data.length) throw new Error('data is empty');
    return data;
}

async function getLessonByIdCourse(course_id: number){
  const data = await getLessonByIdCourseDB(course_id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateLesson(id: number, title: string, course_id: number) {
  const data = await updateLessonDB(id, title, course_id);
  if (!data.length) throw new Error('data is empty');
  return data;
}

async function deleteLesson(id: number) {
  const data = await deleteLessonDB(id);
  return data;
}

// async function updateCourseInfo(id: number, body: iCourse): Promise<iCourse[]> {
//   const data: iCourse[] = await updateCourseInfoDB(id, body);
//   return data;
// }

export { createLesson, getAllLessons, updateLesson, deleteLesson, getLessonByIdCourse }