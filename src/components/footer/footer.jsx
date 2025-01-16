import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-name">
                    Amira Mouamine
                </div>
                <div className="footer-links">
                    <p className="footer-section-title">Liens rapides</p>
                    <ul>
                        <li><a href="#aboutMe">À propos de moi</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p className="footer-section-title">Coordonnées</p>
                    <ul>
                        <li><FaPhoneAlt /> +1 (418) 456-8381</li>
                        <li><FaEnvelope /> amira.mouamine@outlook.fr</li>
                        <li><FaMapMarkerAlt /> 1100, Medecine Avenue, Quebec (QC) G1V 0A9</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
