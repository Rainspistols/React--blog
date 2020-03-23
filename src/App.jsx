import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
