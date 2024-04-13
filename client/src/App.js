import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
// import SignUp from './pages/SignUp/SignUp';
// import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        {/* <Route path='/signin' element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App
