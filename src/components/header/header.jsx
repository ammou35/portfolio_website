import React from "react";
import "./header.css";
import cv from "../../CV/cv.pdf";

const Header = () => {
    const go = (hash) => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="sheetTopBar sheetTopBar5" aria-label="Site menu">
            <div className="sheetMark">PORTFOLIO OF AMIRA MOUAMINE</div>

            <button className="sheetNavItem" type="button" onClick={() => go("#about")}>About</button>
            <button className="sheetNavItem" type="button" onClick={() => go("#projects")}>Projects</button>
            <button className="sheetNavItem" type="button" onClick={() => go("#contact")}>Contact</button>

            <a className="sheetNavItem" href={cv} download>Download CV</a>
        </header>
    );
};

export default Header;
