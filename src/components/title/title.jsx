import React, { useEffect, useState, useRef } from "react";
import './title.css';

const Title = ({ title, style }) => {
    const [typingIndex, setTypingIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const typingDelay = 150;
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTypingIndex(0);
                } else {
                    setIsVisible(false);
                    setTypingIndex(0);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible && typingIndex <= title.length) {
            const timeoutId = setTimeout(() => {
                setTypingIndex((prevIndex) => prevIndex + 1);
                if (!cursorVisible) setCursorVisible(true);
            }, typingDelay);

            return () => clearTimeout(timeoutId);
        } else if (typingIndex > title.length) {
            setCursorVisible(false);
        }
    }, [typingIndex, title.length, isVisible, cursorVisible, typingDelay]);

    const splitTitle = () => {
        return title.split('').map((char, index) => (
            <span
                key={index}
                className="title-text"
                style={{
                    opacity: typingIndex > index ? 1 : 0,
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <div className="title" ref={titleRef} style={style}>
            {splitTitle()}
            <div
                className="cursor"
                style={{
                    left: `${typingIndex * 20}px`,
                    visibility: cursorVisible ? 'visible' : 'hidden',
                }}
            ></div>
        </div>
    );
};

export default Title;
