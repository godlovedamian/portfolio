import React from 'react';
import './App.css';
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/Project/ProjectList";
import Contact from "./components/Contact/Contact";
import {ToastContainer} from "react-toast";

/**
 * @name App component
 * @description The main component of the application
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
    return (
        <div className="App">
            <Intro/>
            <About/>
            <ProjectList/>
            <Contact/>
            <ToastContainer position={"bottom-right"} delay={3000}/>
        </div>
    );
}

export default App;
