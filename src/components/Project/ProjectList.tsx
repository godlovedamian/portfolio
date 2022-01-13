import "../../styles/projectList.css";
import ProjectItem from "./ProjectItem";
import {PROJECTS} from "../../utils/constants";

/**
 * @name ProjectList component
 * @description Renders a list of projects
 * @returns {JSX.Element}
 */
const ProjectList = () => {
    return (
        <div className="project-list">
            <div className="project-list-texts">
                <h1 className="project-list-title">Projects</h1>
                <p className="project-list-desc">
                    Some of the projects I've worked on in the past and some of the projects I'm currently working on.
                </p>
            </div>
            <div className="project-list-list">
                {PROJECTS.map((project) => (
                    <ProjectItem key={project.ID} img={project.IMAGE} link={project.LINK}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
