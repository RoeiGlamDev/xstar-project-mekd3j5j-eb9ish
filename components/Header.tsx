import React from 'react';
import './Header.css'; // Assuming a CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">HouseIL</div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#listings">Listings</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;