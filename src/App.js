import React from 'react';
import Header from "./components/header/header";
import AboutMe from "./components/aboutMe/aboutMe";
import Project from "./components/project/project";
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Project
                title="Projet 1"
                date="June 2021"
                link="https://lookingglass.montroseschool.org/wp-content/uploads/2023/03/3-13-remus.png"
                description="jsp"
            />
        </div>
    );
}


export default App;