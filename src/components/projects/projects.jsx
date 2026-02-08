import React, { useMemo, useRef, useEffect } from "react";
import "./projects.css";

import cnc from "../../images/cnc.png";
import maze from "../../images/maze.png";
import amedeo from "../../images/amedeo.gif";
import sun_rey from "../../images/sun_rey.png";
import portfolio from "../../images/portfolio.png";
import floaty_frog from "../../images/floaty_frog.png";
import motion_logger from "../../images/motion_logger.gif";
import graphics_editor from "../../images/graphics_editor.png";

const Projects = () => {
    const data = useMemo(
        () => [
            {
                title: "Graphics Editor",
                description:
                    "Real-time graphics editor built in C++ with openFrameworks, combining 2D drawing tools with interactive 3D scenes (camera controls, lighting, and material/shading parameter tweaks). Supports importing images and 3D models, real-time rendering, and exporting camera renders for quick visualization.",
                tags: ["C++", "GLSL", "OpenGL", "openFrameworks"],
                image: graphics_editor,
                year: "2023",
                github: "https://github.com/ammou35/computer-graphics"
            },
            {
                title: "Motion Logger",
                description:
                    "Project built to get hands-on with Rust through an end-to-end app (UI + server). Implemented motion detection with OpenCV (grayscale frame differencing) and logged time-stamped events to a motion_log.txt file, while serving a local web UI via a Warp HTTP server with endpoints to push, browse, and clear the event stream.",
                tags: ["Rust", "OpenCV", "Warp"],
                image: motion_logger,
                year: "2022",
                github: "https://github.com/ammou35/motion-logger/"
            },
            {
                title: "3D Character",
                description: "A minimalist low-poly character created for a game currently in development, made as a personal project to learn and organize a complete 3D workflow. Built in Blender, from the base mesh to a clean, animation-ready setup: retopology-aware modeling, rigging, and skinning (weight painting), plus shape keys for the hat. I also animated a set of actions for gameplay and integrated the full character into Unity for in-game use.",
                tags: ["Blender", "Unity"],
                image: amedeo,
                year: "2025",
                github: null
            },
            {
                title: "Floaty-Frog",
                description:
                    "Flappy Bird-inspired mini-game created as a teaching support for beginner members of the game dev club. Built deliberately using Blueprints and UMG for accessibility, and used assets provided by a club member to focus on core gameplay concepts (movement, collisions, scoring) during Unreal Engine tutoring sessions.",
                tags: ["Unreal Engine"],
                image: floaty_frog,
                year: "2024",
                github: null
            },
            {
                title: "SunRey Game",
                description:
                    "Story-driven Unity game set in a solarpunk theme, centered on the main character Heliott. The progression is narrative, with arcade-style mini-games that introduce distinct mechanics and remain consistent with the world and pacing of the story.",
                tags: ["C#", "Unity"],
                image: sun_rey,
                year: "2025",
                github: null
            },
            {
                title: "Personal Portfolio",
                description:
                    "Interactive React portfolio built to stay clear, explicit, and dynamic, with an emphasis on clean UX and performance. Set up a container-based dev environment to understand and reproduce the build setup easily across machines.",
                tags: ["ReactJS", "Docker"],
                image: portfolio,
                year: "2026",
                github: "https://github.com/ammou35/portfolio_website"
            },
            {
                title: "CNC Cutting Simulator",
                description:
                    "Java/Swing application to draw CNC cuts, compute exportable toolpath trajectories, and generate coherent G-code files. Designed with usability in mind (clear workflow and interaction), and structured with modular patterns (MVC, Factory, Listener) for maintainability.",
                tags: ["Java", "Swing", "GCODE"],
                image: cnc,
                year: "2024",
                github: null
            },
            {
                title: "Assisted Maze (VHDL)",
                description:
                    "FPGA maze game built around an AI-themed project: a Python program generates mazes and computes solutions to provide hints, with the goal of helping users develop hand–eye coordination. Input is a red card tracked by a camera, and guidance is overlaid directly onto the camera feed shown on a monitor for more intuitive play; integrated the hardware side on FPGA (including a custom UART RX/TX).",
                tags: ["VHDL", "Xilinx"],
                image: maze,
                year: "2023",
                github: null
            },
        ],
        []
    );

    const mouse = useRef({ x: 0, y: 0 });
    const raf = useRef(0);
    const marqueeRef = useRef(null);
    const marqueeTrackRef = useRef(null);
    const mxRef = useRef(0);
    const lastYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);

    const GithubIcon = (props) => (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56
      0-.28-.01-1.02-.02-2-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.28-1.73-1.28-1.73
      -1.04-.74.08-.73.08-.73 1.15.08 1.75 1.2 1.75 1.2 1.02 1.78 2.68 1.27 3.33.97
      .1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.3-5.23-5.77 0-1.27.45-2.32 1.19-3.13
      -.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.2a10.7 10.7 0 0 1 2.9-.4
      c.98 0 1.97.13 2.9.4 2.2-1.52 3.18-1.2 3.18-1.2.63 1.64.23 2.86.11 3.16
      .74.81 1.19 1.86 1.19 3.13 0 4.48-2.69 5.47-5.25 5.76.41.36.77 1.08.77 2.17
      0 1.57-.02 2.83-.02 3.22 0 .31.21.68.8.56C19.96 21.42 23.25 17.1 23.25 12
      23.25 5.6 18.27.5 12 .5Z"
            />
        </svg>
    );

    useEffect(() => {
        const onMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    useEffect(() => {
        const tick = () => {
            const el = document.querySelector(".projPreview");
            if (el) {
                const x = mouse.current.x + 24;
                const y = mouse.current.y - 24;
                el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf.current);
    }, []);

    useEffect(() => {
        const wrap = marqueeRef.current;
        const track = marqueeTrackRef.current;
        if (!wrap || !track) return;

        let rafId = 0;
        let loopW = 1;

        const measure = () => {
            loopW = Math.max(1, track.scrollWidth / 2);
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const y = window.scrollY || 0;
                const dy = y - lastYRef.current;
                lastYRef.current = y;

                mxRef.current += dy * 0.65;

                let x = mxRef.current % loopW;
                if (x < 0) x += loopW;

                track.style.transform = `translate3d(${-x}px, 0, 0)`;
            });
        };

        measure();
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", measure);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <section className="projectsWrap" id="projects">
            <div className="projectsHeader">
                <div className="projectsKicker">MY WORK</div>
                <div className="projectsMarquee" aria-hidden="true" ref={marqueeRef}>
                    <div className="projectsMarqueeTrack" ref={marqueeTrackRef}>
                      <span className="projectsMarqueeInner">
                        {"PROJECTS · ".repeat(30)}
                      </span>
                                            <span className="projectsMarqueeInner">
                        {"PROJECTS · ".repeat(30)}
                      </span>
                    </div>
                </div>
            </div>

            <div className="projectsGridCards">
                {data.map((p) => (
                    <article className="projCard2" key={p.title}>
                        <div className="projMedia2">
                            <img src={p.image} alt="" loading="lazy"/>
                        </div>

                        <div className="projBody2">
                            <h3 className="projTitle2">{p.title}</h3>
                            <p className="projDesc2">{p.description}</p>

                            <div className="projTags2">
                                {p.tags.map((t) => (
                                    <span className="tag2" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                        {p.github ? (
                            <a
                                className="projGithub"
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${p.title} on GitHub`}
                                title="View on GitHub"
                            >
                                <GithubIcon className="projGithubIcon" />
                            </a>
                        ) : (<span
                                className="projGithub projGithubDisabled"
                                aria-hidden="true"
                                title="GitHub link not available"
                            >
                              <GithubIcon className="projGithubIcon" />
                            </span>)}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
