import React from "react";
import "./hero.css";
import me from "../../images/me.png";

const Hero = () => {
    return (
        <section className="heroWrap snap" id="top">
            <div className="heroLayout">
                <div className="heroInner">
                    <div className="heroKicker">
                        <span>Creative Engineering</span>
                        <span className="heroKickerLine" />
                    </div>

                    <h1 className="heroSlogan">
                        Amira Mouamine
                    </h1>

                    <p className="heroSub">
                        Software engineering for interactive, real-time experiences.
                    </p>
                </div>

                <div className="heroPortrait">
                    <img
                        className="heroPixel"
                        src={me}
                        alt="Pixel art portrait of Amira"
                    />
                </div>
            </div>

            <a className="heroExplore" href="#about">
                Explore
                <span aria-hidden="true">↓</span>
            </a>
        </section>
    );
};

export default Hero;