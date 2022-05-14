import './App.css';
import {Routes, Route} from "react-router-dom";
import About from './Pages/About';
import LogIn from './Pages/LogIn';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<LogIn></LogIn>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
