import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navBar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="logo-button">
                    <h1>Quran App</h1>
                </Link>

            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/surahs" onClick={toggleMenu}>Surahs</Link>
                </li>
                <li>
                    <Link to="/signup" onClick={toggleMenu}>Signup</Link>
                </li>
                <li>
                    <Link to="/login" onClick={toggleMenu}>Login</Link>
                </li>
                <li>
                    <Link to="/quiz" onClick={toggleMenu}>Quiz</Link>
                </li>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
}

export default Navbar;
