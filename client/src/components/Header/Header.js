import style from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return <div>
        <div className={style.header}>
            <p>Hschool</p>
            <div>
                <Link to='/signin'><button className={style.login}>Login →</button></Link>
                <Link to='/signup'><button className={style.signup}>Sign Up</button></Link>
            </div>
        </div>

        <div className={style.border_line}></div>
    </div>

}



export default Header;