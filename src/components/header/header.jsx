import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import cv from "../../CV/cv.pdf";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Amira Mouamine</h1>
            <nav className="header-nav">
                <a href="#aboutMe" className="header-link">À propos de moi</a>
                <a href="#projects" className="header-link">Projets</a>
                <a href="#footer" className="header-link">Contact</a>
                <a href="https://github.com/ammou35" target="_blank" rel="noopener noreferrer" className="header-icon-link">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/amira-mouamine" target="_blank" rel="noopener noreferrer" className="header-icon-link">
                    <FaLinkedin size={24} />
                </a>
                <a href={cv} download className="header-link download-button">
                    <FaDownload size={16} style={{ marginRight: '8px'}} /> Télécharger mon CV
                </a>
            </nav>
        </header>
    );
}

export default Header;
