import React from 'react';
import './project.css';

const Project = ({ title, date, description, image }) => {
    return (
        <div className="project">
                <div className="project-block" style = {{backgroundImage: `url(${image})`}}>
                    <div className="project-content">
                        <div className="project-overlay"></div>
                        <div className="project-info">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-description">{description}</p>
                        </div>

                    </div>
                </div>
            <p className="project-date">{date}</p>
        </div>
    );
};

export default Project;
