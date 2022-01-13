import {emailConfig} from './types';

const {
    REACT_APP_EMAIL_JS_SERVICE_ID,
    REACT_APP_EMAIL_JS_TEMPLATE_ID,
    REACT_APP_EMAIL_JS_USER_ID
} = process.env;

const EMAIL_CONFIG: emailConfig = {
    SERVICE_ID: REACT_APP_EMAIL_JS_SERVICE_ID as string,
    TEMPLATE_ID: REACT_APP_EMAIL_JS_TEMPLATE_ID as string,
    USER_ID: REACT_APP_EMAIL_JS_USER_ID as string,
}

export {EMAIL_CONFIG}