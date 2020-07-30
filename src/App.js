import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({ match }) => {
  return <h1>Welcome {match.params.username}</h1>
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <Route path='/' exact render={Home} />
        <Route path='/about' exact render={About} />
        <Route path='/user/:username' exact render={User} />


      </div>
    </Router>
  );
}

export default App;
