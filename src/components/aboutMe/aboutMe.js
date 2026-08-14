import React from "react";
import "./aboutMe.css";
import ulLogo from "../../images/universite-laval.svg";
import udemLogo from "../../images/universite-montreal.png";
import bentleyLogo from "../../images/bentley-systems.svg";

const AboutMe = () => {
    return (
        <section className="aboutWrap snap" id="about">
            <div className="showcase">
                <div className="showcaseIntro">
                    <div className="showcaseKicker">ABOUT ME</div>
                    <h2 className="showcaseTitle">
                        Building interactive systems that feel alive.
                    </h2>
                    <p className="showcaseText" lang="en">
                        Computer Engineering graduate from Université Laval, now pursuing an M.Sc. in Computer Science
                        at Université de Montréal. I work across real-time graphics, gameplay, and applied AI, and I'm
                        drawn to problems where technical constraints and creative decisions meet.
                    </p>

                    <div className="introFocus">
                        <span>Real-Time Graphics</span>
                        <span>Gameplay Systems</span>
                        <span>Applied AI</span>
                    </div>
                </div>

                <div className="showcaseGrid">
                    <div className="col">
                        <div className="showcaseBlock">
                            <div className="blockHead">
                                <span className="blockLabel">Experience</span>
                            </div>

                            <div className="educationItem experienceItem">
                                <div className="bentleyLogoBox">
                                    <img
                                        className="bentleyLogo"
                                        src={bentleyLogo}
                                        alt="Bentley Systems"
                                    />
                                </div>

                                <div className="educationInfo">
                                    <div className="blockLineStrong">
                                    Full Stack Developer Intern
                                    </div>
                                    <div className="blockLineMeta">
                                        May – Aug 2025
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="showcaseBlock">
                            <div className="blockHead">
                                <span className="blockLabel">Skills</span>
                            </div>
                            <div className="chips tight">
                                {["C++", "C#", "C", "Python", "Java", "Rust", "VHDL", "OpenGL", "Unity", "Unreal Engine", "Machine Learning", "JavaScript/TypeScript", "React", "SQL", "Docker"].map((s) => (
                                    <span key={s} className="chip chip-skill">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                    <div className="showcaseBlock">
                            <div className="blockHead">
                                <span className="blockLabel">Education</span>
                            </div>

                            <div className="blockMain tight">
                                <div className="educationItem">
                                    <img className="educationLogo" src={udemLogo} alt="Université de Montréal"/>

                                    <div className="educationInfo">
                                        <div className="blockLineStrong">
                                            M.Sc. in Computer Science, Artificial Intelligence
                                        </div>
                                        <div className="blockLineMeta">
                                            Starting Sep. 2026
                                        </div>
                                    </div>
                                </div>

                                <div className="educationItem">
                                    <div className="ulLogoBox">
                                        <img className="ulLogo" src={ulLogo} alt="Université Laval"/>
                                    </div>

                                    <div className="educationInfo">
                                        <div className="blockLineStrong">
                                            B.Eng. in Computer Engineering
                                        </div>
                                        <div className="blockLineMeta">
                                            2022 - 2026
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="showcaseBlock right">
                            <div className="subHead">
                                <span className="blockLabel">Leadership & Involvement</span>
                            </div>

                            <div className="itemLine">
                                <div className="blockLineStrong">Co-Leader of the Game Dev Club at Université Laval
                                </div>
                                <div className="blockLineMeta">2024 - 2026</div>
                            </div>

                            <div className="blockMain tight list">
                                <div className="itemLine">
                                    <div className="blockLineStrong">Member of the AI Club at Université Laval</div>
                                    <div className="blockLineMeta">2025 - 2026</div>
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
