import style from './footer.module.css'

function Footer() {
    return <div>
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
                    <div className={style.youtube}></div>
                </div>
                <div className={style.trade_mark}>
                    <p>©2021 Hschool. Project for <span>Hschool</span>.</p>
                </div>
            </div>
        </footer>
    </div>
}


export default Footer