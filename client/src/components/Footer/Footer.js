import style from './footer.module.css'
import Item from './Item';

function Footer() {

    const arr = ['Home', 'Textbook', 'Statistics', 'Sprint'];
    const arr_2 = ['Alex', 'Gabriel', 'Marcus'];
    const classesName = [style.github, style.gt, style.youtube];

    return <div>
        <footer>
            <div className={style.links}>
                <div className={style.pages}>
                    <Item arr={arr}></Item>
                </div>
                <div className={style.lectures}>
                    <Item arr={arr_2}></Item>
                </div>
            </div>

            <div className={style.border_line}></div>

            <div className={style.under_info}>
                <div className={style.soc_networks}>
                    {classesName.map((el, i) => <div className={el} key={i}></div>)}
                    {/* <div className={style.github}></div>
                    <div className={style.gt}></div>
                    <div className={style.youtube}></div> */}
                </div>
                <div className={style.trade_mark}>
                    <p>©2021 Hschool. Project for <span>Hschool</span>.</p>
                </div>
            </div>
        </footer>
    </div>
}


export default Footer