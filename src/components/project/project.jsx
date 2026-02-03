import React from "react";
import "./project.css";

const Project = ({ title, description, tags, image, reverse, tone }) => {
    return (
        <article className={`projCard rounded tone-${tone} ${reverse ? "reverse" : ""}`}>
            <div className="projMedia rounded" style={{backgroundImage: `url(${image})`}}/>
            <div className="projInfo">
                <h3 className="projTitle">{title}</h3>
                <p className="projDesc">{description}</p>
                <div className="projTags">
                    {tags?.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Project;
