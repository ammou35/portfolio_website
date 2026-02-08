import React, { useState } from "react";
import "./footer.css";
import cv from "../../CV/cv.pdf";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjdynlk";

const IconBase = ({ children }) => (
    <svg className="contactIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        {children}
    </svg>
);

const IconMail = () => (
    <IconBase>
        <path
            d="M4 6.5h16v11H4v-11Zm1.6 1.5 6.4 5 6.4-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconBase>
);

const IconPhone = () => (
    <IconBase>
        <path
            d="M7.5 4.8 9.8 7c.4.4.4 1 0 1.4L8.6 9.6c1.2 2.3 3.1 4.2 5.4 5.4l1.2-1.2c.4-.4 1-.4 1.4 0l2.2 2.3c.4.4.4 1.1 0 1.5-.8.9-2 1.3-3.2 1.1-7.1-1.2-12.7-6.8-13.9-13.9-.2-1.2.2-2.4 1.1-3.2.4-.4 1.1-.4 1.5 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconBase>
);

const IconLinkedIn = () => (
    <IconBase>
        <path
            d="M6.6 9.2v8.2M6.6 6.7h0M10.2 9.2v8.2m0-5c0-1.7 1.3-3.1 3-3.1 1.6 0 2.9 1.4 2.9 3.1v5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconBase>
);

const IconGitHub = () => (
    <IconBase>
        <path
            d="M9.2 19.3c-3.4 1-3.4-1.7-4.8-2.1m9.6 3.4v-2.6c0-.7.2-1.3.6-1.8-2.1-.2-4.4-1.1-4.4-4.9 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.8-2.3 4.7-4.5 4.9.4.5.7 1.2.7 2.3v2.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconBase>
);

const IconDownload = () => (
    <IconBase>
        <path
            d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconBase>
);

const Footer = () => {
    const [status, setStatus] = useState({ type: "idle", msg: "" });

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading", msg: "" });

        try {
            const form = e.currentTarget;
            const data = new FormData(form);

            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                form.reset();
                setStatus({ type: "success", msg: "Message sent — thank you!" });
            } else {
                const json = await res.json().catch(() => null);
                const msg =
                    json?.errors?.[0]?.message ||
                    "Formspree error: please verify your form ID.";
                setStatus({ type: "error", msg });
            }
        } catch (err) {
            setStatus({ type: "error", msg: "Network error — please try again." });
        }
    };

    return (
        <section className="contactWrap snap" id="contact">
            <div className="contactCard rounded">
                <div className="contactLeft">
                    <div className="contactKicker">CONTACT</div>

                    <h2 className="contactTitle">Let’s work together.</h2>

                    <p className="contactText">
                        I’m available for internships and full-time opportunities. If you’re hiring, let’s talk.
                    </p>
                </div>

                <form className="contactForm" onSubmit={onSubmit}>
                    <label>
                        <span>Name</span>
                        <input name="name" type="text" required placeholder="Your name"/>
                    </label>

                    <label>
                        <span>Email</span>
                        <input name="email" type="email" required placeholder="you@email.com"/>
                    </label>

                    <label>
                        <span>Message</span>
                        <textarea name="message" rows="5" required placeholder="Tell me about the role and what you’re looking for..."/>
                    </label>

                    <button type="submit">
                        {status.type === "loading" ? "Sending..." : "Send"}
                    </button>

                    {status.type !== "idle" && (
                        <div className={`formStatus ${status.type}`}>
                            {status.msg}
                        </div>
                    )}
                </form>
            </div>

            <div className="contactBottomBar" aria-label="Contact details">
                <a
                    className="contactIconLink"
                    href="tel:+14184568381"
                    aria-label="Phone"
                >
                    <IconPhone/>
                    <span className="contactIconLabel">+1 (418) 456-8381</span>
                </a>

                <a
                    className="contactIconLink"
                    href="mailto:amira.mouamine@outlook.fr"
                    aria-label="Email"
                >
                    <IconMail/>
                    <span className="contactIconLabel">amira.mouamine@outlook.fr</span>
                </a>

                <a
                    className="contactIconLink"
                    href="https://www.linkedin.com/in/amira-mouamine"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <IconLinkedIn/>
                    <span className="contactIconLabel">LinkedIn</span>
                </a>

                <a
                    className="contactIconLink"
                    href="https://github.com/ammou35"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <IconGitHub/>
                    <span className="contactIconLabel">GitHub</span>
                </a>

                <a
                    className="contactIconLink"
                    href={cv}
                    download
                    aria-label="Download CV"
                >
                    <IconDownload/>
                    <span className="contactIconLabel">Download CV</span>
                </a>
            </div>
        </section>
    );
};

export default Footer;
