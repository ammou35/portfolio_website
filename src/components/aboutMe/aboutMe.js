import React from "react";
import Title from "../title/title";
import me from '../../images/me.jpg';
import './aboutMe.css';


const AboutMe = () => {
    return (
        <section className="aboutMe" id="aboutMe">
            <div className="aboutMe-content">
                <img src={me} className="aboutMe-picture" alt="Me !"/>
                <div>
                    <Title title='À propos de moi !' style={{color: `white`, fontSize: `clamp(1.5rem, 2.5vw, 2.5rem)`}}/>
                    <p className="aboutMe-text">
                        Je suis étudiante en 3ᵉ année de génie informatique à l’Université Laval, passionnée par la création et le développement
                        de projets alliant technique et créativité ! Responsable socio-culturel du club de développement de jeux vidéos à l'Université,
                        j’aime partager et apprendre aux côtés de personnes animées par la même envie d’innover.
                    </p>
                </div>
            </div>
        </section>
    );
}


export default AboutMe;