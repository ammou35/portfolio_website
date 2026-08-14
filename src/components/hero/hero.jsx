import React from "react";
import "./hero.css";
import me from "../../images/me.png";

const Hero = () => {
    return (
        <section className="heroWrap snap" id="top">
            <div className="heroLayout">
                <div className="heroInner">
                    <div className="heroKicker">
                        <span>Computer Engineer</span>
                        <span className="heroKickerLine" />
                    </div>

                    <h1 className="heroSlogan">
                        Amira Mouamine
                    </h1>

                    <p className="heroSub">
                        Making it work is only the beginning.
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