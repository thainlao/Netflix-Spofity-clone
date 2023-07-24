import React from 'react';
import Mainimg from './FrontComponents/Mainimg';
import TextandPic from './FrontComponents/TextandPic';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './BackComponents/Login';
import Navbar from './FrontComponents/Navbar';
import SignIn from './BackComponents/SighIn';
import Subscribe from './BackComponents/Subscribe';
import Dashboard from './BackComponents/Dashboard';
import Films from './FrontComponents/Films';
import Music from './FrontComponents/Music';
import Support from './FrontComponents/Support';

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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/films' element={<Films />} />
          <Route path='/music' element={<Music />} />
          <Route path='/support' element={<Support />} />
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
