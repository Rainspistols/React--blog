import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactUs from './pages/ContactUs/ContactUs';
import Posts from './pages/Posts/Posts';
import Home from './pages/Home/Home';

// import blogPostsService from './components/services/blogPostsService';
import './App.scss';

//  Delete Hero ? Card ?

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Route path='/' exact component={Home} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/posts/:postId' component={Posts} />
      </div>
      {/* <Service /> */}
    </Router>
  );
}

export default App;
