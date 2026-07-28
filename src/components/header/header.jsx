import React from "react";
import { FaDownload } from "react-icons/fa6";
import "./header.css";
import cv from "../../CV/cv.pdf";

const Header = () => {
    const go = (hash) => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="sheetTopBar sheetTopBar5" aria-label="Site menu">
            <a className="sheetMark" href="#top" aria-label="Back to top">
                <span>Portfolio </span>

                <img
                    className="sheetMarkHead"
                    src="/head.png"
                    alt=""
                    aria-hidden="true"
                />

                <span>Amira Mouamine</span>
            </a>

            <button className="sheetNavItem" type="button" onClick={() => go("#about")}>About</button>
            <button className="sheetNavItem" type="button" onClick={() => go("#projects")}>Projects</button>
            <button className="sheetNavItem" type="button" onClick={() => go("#contact")}>Contact</button>

            <a className="sheetNavItem sheetDownload" href={cv} download>
                <FaDownload className="sheetDownloadIcon" aria-hidden="true"/>
                <span>Download CV</span>
            </a>
        </header>
    );
};

export default Header;
