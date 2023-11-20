import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Firedata from './components/Firedata';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/firedata" element={<Firedata/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
