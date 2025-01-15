import React from 'react';
import Header from "./components/header/header";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Projects />
        </div>
    );
}


export default App;