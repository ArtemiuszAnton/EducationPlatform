import { useEffect, useState } from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import JsCookie from 'js-cookie';

function Header() {

    const [token, setToken] = useState();
    const navigate = useNavigate();

    const getToken = () => {
        const aplicationToken = JsCookie.get('accessToken');
        setToken(aplicationToken);
    }

    useEffect(() => getToken(), [token]);

    const deleteToken = () => {
        JsCookie.remove('accessToken');
        setToken('');
        navigate('/')
    }

    return <div>
        <div className={style.header}>
            <p>Hschool</p>
            {token ?
                <button onClick={deleteToken} className={style.login}>Log out →</button>
                :
                <div>
                    <Link to='/signin'><button className={style.login}>Login →</button></Link>
                    <Link to='/signup'><button className={style.signup}>Sign Up</button></Link>
                </div>
            }
        </div>

        <div className={style.border_line}></div>
    </div>

}



export default Header;