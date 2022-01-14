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
    ADDRESS: 'Dar es Salaam, Tanzania',
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
        LINK: "https://www.lighthouse.app/insurance",
    },
    {
        ID: 2,
        IMAGE: avertro,
        LINK: "https://www.avertro.com/",
    },
    {
        ID: 3,
        IMAGE: larven,
        LINK: "https://www.larven.co.tz/",
    },
    {
        ID: 4,
        IMAGE: magwiji,
        LINK: "https://magwiji.com/",
    },
    {
        ID: 5,
        IMAGE: adxlabs,
        LINK: "https://www.adxlabs.com/",
    },
    {
        ID: 6,
        IMAGE: tafu,
        LINK: "https://play.google.com/store/apps/details?id=com.tafu.tafu",
    },
];

export {PERSONAL_INFORMATION, ACTIVITIES, FORM_SUBMISSION_MESSAGES, PROJECTS};