import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import About from './pages/about/About'
import Login from "./pages/login/Login";
import "./App.css"

// import Homepage from './pages/homepage/Homepage'

function App() {
  <div>
    
  </div>
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
