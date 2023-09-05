import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Compunents/Login';
import Navbar from './Compunents/Navbar';
import Signup from './Compunents/Signup';
import Home from './Compunents/Home';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userdata' element={<Home/>}></Route>





        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
