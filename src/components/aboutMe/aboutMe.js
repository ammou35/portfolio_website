import React from "react";
import "./aboutMe.css";
import ulLogo from "../../images/universite-laval.svg";
import bentleyLogo from "../../images/bentley-systems.svg";

const AboutMe = () => {
    return (
        <section className="aboutWrap snap" id="about">
            <div className="showcase">
                <div className="showcaseIntro">
                    <div className="showcaseKicker">ABOUT ME</div>
                    <h2 className="showcaseTitle">
                        Designing interactive systems that feel alive.
                    </h2>
                    <p className="showcaseText">
                        I’m a Computer Engineering student at Université Laval, and I enjoy building interactive systems
                        with real presence. Real-time graphics, gameplay logic, visual tools, and clean architecture are
                        what I like to explore and deepen.
                    </p>
                </div>

                <div className="showcaseGrid">
                    <div className="col">
                        <div className="showcaseBlock right">
                            <div className="blockHead">
                                <span className="blockLabel">Experience</span>
                                <img className="blockLogo" src={bentleyLogo} alt="Bentley Systems" />
                            </div>
                            <div className="blockMain tight">
                                <div className="blockLineStrong">Full Stack Developer Intern</div>
                                <div className="blockLineMeta">May–Aug 2025</div>
                            </div>
                        </div>

                        <div className="showcaseBlock">
                            <div className="blockHead">
                                <span className="blockLabel">Skills</span>
                            </div>
                            <div className="chips tight">
                                {["C++", "Python", "React", "OpenGL", "Embedded", "ML (PyTorch)", "Docker"].map((s) => (
                                    <span key={s} className="chip chip-skill">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="showcaseBlock">
                            <div className="blockHead">
                                <span className="blockLabel">Education</span>
                                <div className="logoFrame ul">
                                    <img className="blockLogo ul" src={ulLogo} alt="Université Laval"/>
                                </div>

                            </div>
                            <div className="blockMain tight">
                                <div className="blockLineStrong">B.Eng. in Computer Engineering</div>
                                <div className="blockLineMeta">2021–2026</div>
                            </div>
                        </div>

                        <div className="showcaseBlock right">
                            <div className="subHead">
                                <span className="subLabel">Implication</span>
                            </div>

                            <div className="itemLine">
                                <div className="blockLineStrong">Co-Leader of the Game Dev Club</div>
                                <div className="blockLineMeta">2024–present</div>
                            </div>

                            <div className="blockMain tight list">
                                <div className="itemLine">
                                    <div className="blockLineStrong">Member of the AI Club</div>
                                    <div className="blockLineMeta">2025–present</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
