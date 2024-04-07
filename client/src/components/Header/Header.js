import style from './Header/header.module.css'

function Header() {
    return <div className={style.header}>
        <p>Hschool</p>
        <div>
            <button className={style.login}>Login →</button>
            <button className={style.signup}>Sign Up</button>
        </div>
    </div>

}



export default Header;