import style from './home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
    return <div>

        <Header />

        <main>
            <div className={style.first_block}>

                <div className={style.left_side}>
                    <h5>E-COURSE PLATFORM</h5>
                    <h1>Learning and
                        teaching online,
                        made easy.</h1>
                    <p>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.button}>About platform</div>
                    <div className={style.lights}>
                        <div className={style.light_img}></div>
                        <p>600<span>+</span></p>
                    </div>
                    <p className={style.students_about}>Students</p>
                </div>

                <div className={style.student_img}></div>
            </div>

            <div className={style.second_block}>
                <div className={style.wrapper_width}>

                    <div className={style.dzen_student}></div>

                    <div className={style.mini_games_learn}>
                        <h1>Learn a language in a playful way</h1>
                        <p>Make learning programming langueges more fun with mini-games</p>
                        <div className={style.game_links}>
                            <div className={style.sprint_game}></div>
                            <div className={style.tasks_game}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.third_block}>
                <div className={style.books_info}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div>Textbook →</div>
                </div>

                <div className={style.books_student}></div>
            </div>

            <div className={style.fourth_block}>
                <div className={style.wrapper_width}>
                    <div className={style.students_duet}></div>

                    <div className={style.student_stat}>
                        <h1>Watch your progress every day</h1>
                        <p>Save statistics on your achievements and mistakes</p>
                        <div>Statistics →</div>
                    </div>
                </div>
            </div>

        </main>

        <Footer />

    </div>
}

export default Home