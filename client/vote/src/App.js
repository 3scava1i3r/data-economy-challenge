import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Vote from './components/Vote'

function App() {
  return (
    <div className="App">
     <div><Navbar /></div>
     <div>
      <img
        className="home__image"
        src="https://images.unsplash.com/photo-1604451372323-158c45058d10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="banner"
      />
     </div>
    <Form />
    <Vote />
    </div>
  );
}

export default App;
