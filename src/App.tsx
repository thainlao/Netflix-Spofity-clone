import React from 'react';
import Mainimg from './FrontComponents/Mainimg';
import TextandPic from './FrontComponents/TextandPic';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './BackComponents/Login';
import Navbar from './FrontComponents/Navbar';
import SignIn from './BackComponents/SighIn';
import Subscribe from './BackComponents/Subscribe';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Mainimg />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
