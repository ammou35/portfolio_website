import React from 'react';
import './header.css';


const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Amira Mouamine</h1>
            <nav className="header-nav">
                <a href="#aboutMe" className="header-link">À propos de moi</a>
                <a href="#projects" className="header-link">Projets</a>
            </nav>
        </header>
    );
}


export default Header;