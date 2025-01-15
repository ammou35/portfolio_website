import React from 'react';
import './project.css';

const Project = ({ title, date, link, description, image }) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-block">
                    <div className="project-content">
                        <div className="project-overlay"></div>
                        <div className="project-info">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-description">{description}</p>
                            <button className="project-button">Voir plus</button>
                        </div>

                    </div>
                </div>
            </a>
            <p className="project-date">{date}</p>
        </div>
    );
};

export default Project;
