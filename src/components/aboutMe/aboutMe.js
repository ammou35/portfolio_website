import React from "react";
import './aboutMe.css';


const AboutMe = () => {
    return (
        <section className="aboutMe">
            <div className="aboutMe-content">
                <img src="https://lookingglass.montroseschool.org/wp-content/uploads/2023/03/3-13-remus.png" className="aboutMe-picture" alt="Me !"/>
                <p className="aboutMe-text">
                    Je suis une étudiante passionnée.
                </p>
            </div>
        </section>
    );
}


export default AboutMe;