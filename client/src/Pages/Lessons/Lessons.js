import style from './lessons.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function Lessons() {
    return <div>

        <Header />

        <div className={style.less_back}>
            <div className={style.left_section}>
                <div className={style.info}>
                    <div className={style.img_books}></div>
                    <div className={style.texts}>
                        <h1>JavaScript</h1>
                        <p>
                            JavaScript is a practical course where students learn
                            the basics of JavaScript. It covers variables, operators,
                            conditionals, loops, functions, and data manipulation.
                        </p>
                    </div>
                </div>
                <div className={style.btn}>Go to course</div>
            </div>
            <div className={style.right_section}>
                <h1>15 lessons</h1>
                <p>1. Test</p>
                <p>1. Test</p>
                <p>1. Test</p>
                <p>1. Test</p>
                <p>1. Test</p>
            </div>
        </div>

        <Footer />

    </div>
}


export default Lessons