import React, { useEffect } from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import "./styles/theme.css";

export default function App() {
    useEffect(() => {
        const contact = document.getElementById("contact");
        if (!contact) return;

        const obs = new IntersectionObserver(
            ([e]) => document.body.classList.toggle("is-dark", e.isIntersecting),
            { threshold: 0.2 }
        );
        obs.observe(contact);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="appRoot">
            {/*<div className="uiLayer">*/}
            {/*    <Header/>*/}
            {/*</div>*/}

            <main className="contentLayer page">
                <Hero/>
                <div className="sheet" id="about">
                    <div className="sheetHeader">
                        <Header/>
                    </div>

                    <div className="sheetBody">
                        <AboutMe/>
                        <Projects/>
                    </div>
                </div>
                <Footer/>
            </main>

        </div>
    );
}
