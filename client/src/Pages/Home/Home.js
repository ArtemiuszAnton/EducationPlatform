import style from './home.module.css'

function Home() {
    return <div>
        <div className={style.header}>
            <p>Hschool</p>
            <div>
                <button className={style.login}>Login →</button>
                <button className={style.signup}>Sign Up</button>
            </div>
        </div>

        <div className={style.border_line}></div>

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

            <div className={style.third_block}>
                <div className={style.books_info}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div>Textbook →</div>
                </div>

                <div className={style.books_student}></div>
            </div>

            <div className={style.fourth_block}>
                <div className={style.students_duet}></div>

                <div className={style.student_stat}>
                    <h1>Watch your progress every day</h1>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div>Statistics →</div>
                </div>
            </div>

        </main>

        <footer>
            <div className={style.links}>
                <div className={style.pages}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.lectures}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>

            <div className={style.border_line}></div>

            <div className={style.under_info}>
                <div className={style.soc_networks}>
                    <div className={style.github}></div>
                    <div className={style.gt}></div>
                    <div className={style.yuotube}></div>
                </div>
                <div className={style.trade_mark}>
                    <p>©2021 Hschool. Project for <span>Hschool</span>.</p>
                </div>
            </div>
        </footer>

    </div>
}

export default Home