import avertro from '../img/avertro.png';
import larven from '../img/larven.png';
import magwiji from '../img/magwiji.png';
import {formSubmissionMessages, personalInformation, project} from "./types";

const PERSONAL_INFORMATION: personalInformation = {
    FULL_NAME: 'Godlove Damian',
    PHONE_NUMBER: '+255 629 290 834',
    EMAIL: 'godlove@innocent.com',
    ADDRESS: 'Nyuki road, Bahari beach, Dar es Salaam, Tanzania',
}

const ACTIVITIES: string[] = ['Software Engineer', 'Grill Master', 'Traveller'];

const FORM_SUBMISSION_MESSAGES: formSubmissionMessages = {
    LOADING_MESSAGE: 'Sending your info...',
    SUCCESS_MESSAGE: '🎉 Awesome, I\'ll get back to you ASAP!',
    FAILURE_MESSAGE: 'Something went wrong. Please try again in a few🙁',
}

const PROJECTS: project[] = [
    {
        ID: 1,
        IMAGE: avertro,
        LINK: "#",
    },
    {
        ID: 2,
        IMAGE: larven,
        LINK: "#",
    },
    {
        ID: 3,
        IMAGE: magwiji,
        LINK: "#",
    },
    {
        ID: 4,
        IMAGE: "https://images.pexels.com/photos/3183131/pexels-photo-3183131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        LINK: "#",
    },
    {
        ID: 5,
        IMAGE: "https://images.pexels.com/photos/7887842/pexels-photo-7887842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        LINK: "#",
    },
    {
        ID: 6,
        IMAGE: "https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        LINK: "#",
    },
];

export {PERSONAL_INFORMATION, ACTIVITIES, FORM_SUBMISSION_MESSAGES, PROJECTS};