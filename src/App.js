import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./components/contact"

function App() {
  return (
    <div className="app">
      <Contact 
      avatar="https://randomuser.me/api/portraits/men/54.jpg"
      name="Robert"
      status="false"
      />

    <Contact 
      avatar="https://randomuser.me/api/portraits/women/76.jpg"
      name="Julia"
      status="false"
      />

    <Contact 
      avatar="https://randomuser.me/api/portraits/women/23.jpg"
      name="Jane"
      status="false"
      />

    </div>
  );
}

export default App;


//ReactDOM.render(element, document.getElementById('root'));
//{online ? "online" : "offline" } 