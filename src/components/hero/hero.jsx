import React from "react";
import "./hero.css";

const Hero = () => {
    return (
        <section className="heroWrap snap" id="top">
            <div className="heroInner">
                <div className="heroKicker">CREATIVE ENGINEERING</div>
                <h1 className="heroSlogan">
                    Amira Mouamine
                </h1>
                <p className="heroSub">
                    Full-stack · real-time · intelligent experiences.
                </p>
            </div>
        </section>
    );
};

export default Hero;
