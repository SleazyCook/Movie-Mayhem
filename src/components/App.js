import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>Movie Mayhem</header>
      <Navbar />
      <Outlet />
      <footer>
        <p>Developed by <span id="author">Drewford</span></p>
      </footer>
    </div>
  )
};

export default App;