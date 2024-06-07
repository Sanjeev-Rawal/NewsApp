import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Newsboard from './Components/Newsboard';
import React, {useState} from "react";

function App() {
  return (
    <div className="App">
      
<Navbar/>
<Newsboard/>
      
    </div>
  );
}

export default App;
