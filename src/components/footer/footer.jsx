import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer" id="footer">
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
                    <p className="footer-section-title">Contact</p>
                    <ul>
                        <li><FaPhoneAlt style={{color: `#ffae00`}}/> +1 (418) 456-8381</li>
                        <li><FaEnvelope style={{color: `#ffae00`}}/> amira.mouamine@outlook.fr</li>
                        <li><FaMapMarkerAlt style={{color: `#ffae00`}}/> Québec (QC)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
