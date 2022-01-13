import avertro from '../img/avertro.png';
import larven from '../img/larven.png';
import magwiji from '../img/magwiji.png';
import adxlabs from '../img/adxlabs.png';
import lighthouse from '../img/lighthouse.png';
import tafu from '../img/tafu.png';

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
        IMAGE: lighthouse,
        LINK: "#",
    },
    {
        ID: 2,
        IMAGE: avertro,
        LINK: "#",
    },
    {
        ID: 3,
        IMAGE: larven,
        LINK: "#",
    },
    {
        ID: 4,
        IMAGE: magwiji,
        LINK: "#",
    },
    {
        ID: 5,
        IMAGE: adxlabs,
        LINK: "#",
    },
    {
        ID: 6,
        IMAGE: tafu,
        LINK: "#",
    },
];

export {PERSONAL_INFORMATION, ACTIVITIES, FORM_SUBMISSION_MESSAGES, PROJECTS};