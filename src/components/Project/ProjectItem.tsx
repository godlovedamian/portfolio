import "../../styles/projectItem.css";
import {projectItem} from '../../utils/types'

/**
 * @name ProjectItem component
 * @description Renders a single project item
 * @param img
 * @param link
 * @returns {JSX.Element}}
 */
const ProjectItem = ({img, link}: projectItem): JSX.Element => {
    return (
        <div className="project-item">
            <div className="project-item-browser">
                <div className="project-item-circle"></div>
                <div className="project-item-circle"></div>
                <div className="project-item-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="project-item-img"/>
            </a>
        </div>
    );
};

export default ProjectItem;