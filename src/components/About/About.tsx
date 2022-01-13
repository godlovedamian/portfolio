import '../../styles/about.css';
import {AboutImage} from "../../img/Img";
import {
    FaCode,
    FaLaptopCode,
    FaPeopleCarry,
    FaRoute,
} from "react-icons/fa";
import React from "react";
import {IoBusiness, IoFastFood} from "react-icons/io5";

/**
 * @name About component
 * @description Renders the about page
 * @returns {JSX.Element}
 */
const About = (): JSX.Element => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <AboutImage/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">Facts about Me</h1>
                <p className="about-sub">
                    <FaLaptopCode className="about-icon"/>
                    I'm a forward-thinking Software Engineer with background working productively in dynamic
                    environments.
                </p>
                <p className="about-sub">
                    <FaCode className="about-icon"/>
                    I'm Fluent in TypeScript, NodeJS, NextJS, ReactJS, PostgreSQL, MongoDB, GraphQL, AWS & Linux
                    among others.
                </p>
                <p className="about-sub">
                    <IoBusiness className="about-icon"/>
                    I have developed software within security, real estate, insurance, and fin-tech industries.
                </p>
                <p className="about-sub">
                    <FaPeopleCarry className="about-icon"/>
                    I'm a Proud team player focused on achieving project objectives with speed and accuracy.
                </p>
                <p className="about-sub">
                    <IoFastFood className="about-icon"/>
                    I enjoy experimenting with different dishes and creating new flavors.
                </p>
                <p className="about-sub">
                    <FaRoute className="about-icon"/>
                    I love to travel and discover new places.
                </p>
            </div>
        </div>
    )
}

export default About;