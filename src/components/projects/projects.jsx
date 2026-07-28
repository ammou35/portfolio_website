import React, { useMemo, useRef, useEffect } from "react";
import { FaItchIo } from "react-icons/fa6";
import "./projects.css";

import amedeo from "../../images/amedeo.gif";
import cat_rats from "../../images/cat_rats.png";
import cnc from "../../images/cnc.png";
import emg from "../../images/emg.jpeg";
import floaty_frog from "../../images/floaty_frog.png";
import graphics_editor from "../../images/graphics_editor.png";
import losing_shleep from "../../images/losing_shleep.png";
import maze from "../../images/maze.png";
import motion_logger from "../../images/motion_logger.gif";
import movie_recommender from "../../images/movie_recommender.png";
import musicat from "../../images/musicat.png";
import sun_rey from "../../images/sun_rey.png";

const Projects = () => {
    const data = useMemo(
        () => [
            {
                title: "Graphics Editor",
                description:
                    "Interactive 2D/3D graphics editor developed in C++ with OpenGL, GLSL and openFrameworks. Implemented camera controls, model and image import, lighting, materials, shader-based real-time rendering and render export.",
                tags: ["C++", "OpenGL", "GLSL", "openFrameworks"],
                image: graphics_editor,
                year: "2023",
                github: "https://github.com/ammou35/computer-graphics"
            },
            {
                title: "Movie Recommendation System",
                description:
                    "Hybrid recommendation system combining clustering, semantic similarity and supervised quality prediction. Processed movie descriptions and genres to identify related content and generate recommendations aligned with user preferences.",
                tags: ["Python", "scikit-learn", "Machine Learning", "clustering"],
                image: movie_recommender,
                year: "2025",
                github: "https://github.com/ammou35/movie_recommendations"
            },
            {
                title: "3D Character",
                description:
                    "Created a low-poly character in Blender through a complete game-ready workflow: modeling, retopology, rigging, skinning, weight painting and shape keys. Animated a set of gameplay actions and integrated the character into Unity.",
                tags: ["Blender", "Unity", "3D Modeling", "Rigging", "Animation"],
                image: amedeo,
                year: "2025",
                github: null
            },
            {
                title: "Sun-Rey",
                description:
                    "Story-driven solarpunk 2D game solo-developed during a one-week game jam, centered on Heliott and structured around arcade-style mini-games. Implemented movement, collisions, input and state systems, and created the original pixel-art environments and eight-direction character animations.",
                tags: ["C#", "Unity", "2D", "Aseprite", "Game Jam"],
                image: sun_rey,
                year: "2025",
                github: null
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
                title: "Floaty-Frog",
                description:
                    "Flappy Bird-inspired mini-game created as a teaching support for beginner members of the game dev club. Built deliberately using Blueprints and UMG for accessibility, and used assets provided by a club member to focus on core gameplay concepts (movement, collisions, scoring) during Unreal Engine tutoring sessions.",
                tags: ["Unreal Engine"],
                image: floaty_frog,
                year: "2024",
                github: null
            },
            {
                title: "EMG Gesture-Controlled Driving",
                description:
                    "Award-winning real-time gesture recognition project developed with the Laval University AI Club. Processed EMG sensor data and applied machine learning to translate hand gestures into driving commands, from simulation testing in Trackmania to deployment on a F1TENTH autonomous vehicle with VAUL.",
                tags: ["Python", "Machine Learning", "EMG", "Signal Processing"],
                image: emg,
                year: "2026",
                github: null
            },
            {
                title: "Cat & Rats",
                description:
                    "Two-player co-op game developed in Unity with custom controls, procedural level generation and a multi-scene game flow. Implemented an AI enemy using A* pathfinding and reactive behavior, alongside avatar customization, animations, VFX, SFX and music systems.",
                tags: ["C#", "Unity", "A* Pathfinding"],
                image: cat_rats,
                year: "2026",
                github: null
            },
            {
                title: "Musicat",
                description:
                    "Wave-themed 3D platformer created during a one-week game jam. Designed the levels and programmed the core gameplay systems, while also modeling, texturing and animating original 3D assets in Blender before integrating them into Unity.",
                tags: ["C#", "Unity", "Blender", "3D Animation"],
                image: musicat,
                year: "2026",
                github: null,
                itch: "https://dev-devy.itch.io/musicat"
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
                title: "Assisted Maze (VHDL)",
                description:
                    "FPGA maze game built around an AI-themed project: a Python program generates mazes and computes solutions to provide hints, with the goal of helping users develop hand–eye coordination. Input is a red card tracked by a camera, and guidance is overlaid directly onto the camera feed shown on a monitor for more intuitive play; integrated the hardware side on FPGA (including a custom UART RX/TX).",
                tags: ["VHDL", "Xilinx"],
                image: maze,
                year: "2023",
                github: null
            },
            {
                title: "Losing Shleep",
                description:
                    "Behavior-based 2D game created during a four-day GMTK game jam, centered on identifying wolves hidden among a flock of sheep. Features autonomous flock routines, stalking and escape behaviors, limited-range aiming, and a cohesive pixel-art presentation.",
                tags: ["C#", "Unity", "2D", "Pixel Art", "Game Jam"],
                image: losing_shleep,
                year: "2026",
                itch: "https://ruderaspberry.itch.io/losingshleep"
            },
        ],
        []
    );

    const mouse = useRef({ x: 0, y: 0 });
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
                        {"PROJECTS · ".repeat(50)}
                      </span>
                      <span className="projectsMarqueeInner">
                        {"PROJECTS · ".repeat(50)}
                      </span>
                    </div>
                </div>
            </div>

            <div className="projectsGridCards">
                {data.map((p) => (
                    <article className="projCard2" key={p.title}>
                        <div className="projMedia2">
                            <img src={p.image} alt={`${p.title} project preview`} loading="lazy"/>
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
                        {p.itch ? (
                            <a
                                className="projGithub"
                                href={p.itch}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${p.title} on itch.io`}
                                title="View on itch.io"
                            >
                                <FaItchIo className="projGithubIcon" />
                            </a>
                        ) : p.github ? (
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
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
