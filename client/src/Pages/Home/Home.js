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

        <div className={style.main}>
            <div className={style.left_side}>
                <h5>E-COURSE PLATFORM</h5>
                <h1>Learning and
                    teaching online,
                    made easy.</h1>
                <p>Any subject, in any language, on any device, for all ages!</p>
                <div>About platform</div>
                <div>
                    <div className={style.lights}></div>
                    <p>600+</p>
                    <p>Students</p>
                </div>
            </div>

            <div className={style.student_img}></div>
        </div>
    </div>
}

export default Home