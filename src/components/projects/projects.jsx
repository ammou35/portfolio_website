import React from 'react';
import Title from "../title/title";
import Project from "../project/project";
import cnc from '../../images/cnc.png';
import maze from '../../images/maze.png';
import niveau_sonore from '../../images/niveau_sonore.png';
import portfolio from '../../images/portfolio.png';
import quoridor from '../../images/quoridor.png';
import dijkstra from '../../images/dijkstra.png';
import character3D from '../../images/character3D.png';
import './projects.css';


const Projects = () => {
    return (
        <div className="projects" id="projects">
            <Title title='Projets' style={{color: `#0A1430`}}/>
            <div className="projects-done">
                <Project
                    title='Simulateur de découpes CNC'
                    date='Automne 2024'
                    description="Application développée en Java et Java Swing qui permet de simuler et d’importer ou d’exporter le fichier GCODE correspondant à
                    cette simulation tout en garantissant sa cohérence en gérant les coupes invalides en fonction de leur type et de leur emplacement dans le panneau"
                    image={cnc}
                />
                <Project
                    title='Labyrinthe assisté'
                    date='Automne 2024'
                    description="Jeu codé en VHDL sur Xilinx qui affiche une aide visuelle s'il détecte que le joueur met trop de temps
                    à se déplacer ou s’il reste coincé dans le but d'aider les personnes à déficiences mentales à améliorer leur coordination œil-main"
                    image={maze}
                />
                <Project
                    title='Détecteur de niveau sonore'
                    date='Automne 2024'
                    description="Programme réalisé en C sur STM32CubeIDE qui détecte le niveau d'intensité sonore et adapte
                    l'affichage en fonction de sa valeur et de si cette dernière dépasse un certain seuil"
                    image={niveau_sonore}
                />
                <Project
                    title='Portfolio personnel'
                    date='Hiver 2025'
                    description="Site web créé en React pour présenter mes compétences, mes expériences et mes projets, incluant mes coordonnées"
                    image={portfolio}
                />
                <Project
                    title='Calcul de l’itinéraire le plus court avec la RTC'
                    date='Automne 2023'
                    description="Amélioration de l’algorithme de Dijkstra afin de réduire le temps d’exécution,
                     compte tenu du volume important de données traitées, en représentant la ville de Québec par un graphe"
                    image={dijkstra}
                />
                <Project
                    title='Quoridor'
                    date='Automne 2022'
                    description="Jeu développé en Python3 sur VS Code et basé sur le véritable jeu du Quoridor avec un API
                    qui envoie des requêtes au serveur de l’enseignant pour pouvoir jouer contre un bot"
                    image={quoridor}
                />
            </div>
            <Title title='En cours...' style={{color: `#0A1430`}}/>
            <div className="projects-inProgress">
                <Project
                    title='Personnage en 3D'
                    date='Été 2024'
                    description="Modélisation en cours d’un personnage 3D sur Blender pour apprendre et pratiquer les étapes clés de la création
                     de personnages de jeux vidéo, telles que le block out, le sculpting, la retopologie, et à terme, le rigging.
                     Ce projet s’inscrit dans le cadre d’une idée de jeu vidéo que je développe, et ce personnage sera intégré au jeu une fois terminé."
                    image={character3D}
                />
            </div>
        </div>
    );
};

export default Projects;
