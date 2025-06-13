import { useState } from 'react';
import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='font-serif font-medium w-screen h-screen'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* Public Routes */}
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path='/signup'
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Private Routes */}
        <Route
          path='/'
          element={isLoggedIn ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/about'
          element={isLoggedIn ? <About /> : <Navigate to='/login' />}
        />
        <Route
          path='/userslist'
          element={isLoggedIn ? <UsersList /> : <Navigate to='/login' />}
        />
        <Route
          path='/userdetails'
          element={isLoggedIn ? <UserDetails /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
}

export default App;
