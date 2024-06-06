import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './signup.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [inp, setInp] = useState('');
    const [inp2, setInp2] = useState('');
    const [inp3, setInp3] = useState('');
    const [inp4, setInp4] = useState('');

    const navigate = useNavigate();

    const getInp = async () => {
        const data = { name: inp, surname: inp2, email: inp3, pwd: inp4 }
        // console.log(data);
        const response = await axios.post('http://localhost:3001/api/reg', data);
        console.log(response.data);
        navigate('/signin')
    }

    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <input onChange={(e) => setInp(e.target.value)} type="text" placeholder="name" />
                    <input onChange={(e) => setInp2(e.target.value)} type="text" placeholder="surname" />
                    <input onChange={(e) => setInp3(e.target.value)} type="text" placeholder="email" />
                    <input onChange={(e) => setInp4(e.target.value)} type="text" placeholder="password" />
                    <button onClick={getInp}>Sign Up</button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>
}
export default SignUp;


// erttt@gmail.com
// 12456erttr