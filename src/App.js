import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NavbarOne from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarOne />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
