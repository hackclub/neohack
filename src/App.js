import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Guide from './pages/Guide';
import './App.css';

function App(){
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.className = savedTheme === 'light' ? 'light-theme' : 'dark-theme';
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Router>
        <div className="App">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;