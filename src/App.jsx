import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Hero />

        <Route path='/' exact component={Home} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/post' component={Post} />
      </div>
    </Router>
  );
}

export default App;
