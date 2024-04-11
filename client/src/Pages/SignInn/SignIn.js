import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './signin.module.css';


function SignIn() {
    return <div>
        <Header />
        <div>
            <h1>Login</h1>
            <input className={style.login} type="text" placeholder="email" />
            <input className={style.pwd} type="text" placeholder="password" />
            <button>Login</button>
        </div>
        <Footer />
    </div>
}


export default SignIn