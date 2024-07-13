import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './singlecourse.module.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleCourse() {

    const objWithId = useParams();


    const [data, setData] = useState([]);
    const [lesson, setLesson] = useState([]);

    const getCoursesById = async () => {
        const response = await axios.get(`http://localhost:3001/course/${objWithId.id}`);
        setData(response.data);
        const responseLessons = await axios.get(`http://localhost:3001/lessons/${objWithId.id}`);
        setLesson(responseLessons.data)
    }

    useEffect(() => {
        getCoursesById();
    }, [])



    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.content_left}>
                    <div className={style.discription}>
                        <div className={style.image_books}></div>
                        <div className={style.info}>
                            <h1>{data[0]?.course}</h1>
                            <p>{data[0]?.description}</p>

                        </div>
                    </div>
                    <button><Link to={'/courses'}> Go to course</Link></button>

                </div>
                <div className={style.tests}>
                    <h1>15 lessons</h1>
                    {lesson.map((el, i) => <p key={i}>{i + 1}. {el.title}</p>)}
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
export default SingleCourse;