import React from 'react'
import "./App.css";
import SearchFilm from './components/SearchFilm/SearchFilm';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form from "./components/Form/Form"
import About from './components/About/About';
import Home from './components/Home/Home';


const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchFilm" element={<SearchFilm />} />
          <Route path="/Form" element={<Form/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
};

export default App;