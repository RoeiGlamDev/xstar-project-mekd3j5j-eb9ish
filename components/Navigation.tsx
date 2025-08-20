import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming a CSS file for styling

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">HouseIL</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/listings">Listings</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;