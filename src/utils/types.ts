type personalInformation = {
    FULL_NAME: string,
    PHONE_NUMBER: string,
    EMAIL: string,
    ADDRESS: string
};

type formSubmissionMessages = {
    LOADING_MESSAGE: string,
    SUCCESS_MESSAGE: string,
    FAILURE_MESSAGE: string
}

type project = {
    ID: number,
    IMAGE: string,
    LINK: string,
}

type emailConfig = {
    SERVICE_ID: string,
    TEMPLATE_ID: string,
    USER_ID: string,
}

type projectItem = {
    img: string,
    link: string
}

export type {
    personalInformation,
    formSubmissionMessages,
    project,
    emailConfig,
    projectItem,
}