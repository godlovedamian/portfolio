import '../../styles/intro.css';
import {Me, ScrollButton} from "../../img/Img";
import {ACTIVITIES, PERSONAL_INFORMATION} from "../../utils/constants";

const {FULL_NAME} = PERSONAL_INFORMATION;

/**
 * @name Intro component
 * @description Renders the intro section of the page.
 * @returns {JSX.Element}
 */
const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hi, My name is</h2>
                    <h1 className="intro-name">{FULL_NAME}</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            {
                                ACTIVITIES.map(activity => <div className="intro-title-item" key={activity}>{activity}</div>)
                            }
                        </div>
                    </div>
                    <p className="intro-desc">
                        Great meeting you, I'm a Software Engineer, Grill Master and Traveller. I'm a passionate and
                        dedicated individual who loves to learn new things and share my knowledge with others.
                    </p>
                </div>
                <ScrollButton/>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <Me/>
            </div>
        </div>
    );
}

export default Intro;