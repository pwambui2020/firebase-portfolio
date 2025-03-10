import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import ResetPassword from './components/reset_password';
import Firestore from './components/firestore';

function App() {
  return (
    
    <Router>
      <nav>
         <ul className='nav-links'>
            <li><a class="active" href="/firestore">Home</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/resetpassword">Reset Password</a></li>
          </ul>
      </nav>


      <div className="App">
        <header className="App-header">
          <h1 className='title'>Firestore Project</h1>
          <div className='cards'>
            <ul className='pro'></ul>
            <ul className='bio'></ul>
            <ul className='skills'></ul>
            
          </div>

          <Routes>
            <Route path="/firestore" element={<Firestore />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
