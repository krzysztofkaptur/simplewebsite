// node_modules
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// custom containers
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// custom components
import Header from './components/Header'
import Footer from './components/Footer'

// styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
