import "../../styles/contact.css";
import React, {FormEvent, MutableRefObject, useContext, useRef, useState} from "react";
import {FaMobile, FaAt, FaMapMarker} from "react-icons/fa";
import emailjs from "emailjs-com";
import {FORM_SUBMISSION_MESSAGES, PERSONAL_INFORMATION} from "../../utils/constants";
import {EMAIL_CONFIG} from "../../utils/util";
import {toast} from "react-toast";
import Spinner from "react-text-spinners";

const {
    PHONE_NUMBER,
    EMAIL,
    ADDRESS,
} = PERSONAL_INFORMATION;

const {
    SERVICE_ID,
    TEMPLATE_ID,
    USER_ID,
} = EMAIL_CONFIG;

const {
    SUCCESS_MESSAGE,
    FAILURE_MESSAGE,
} = FORM_SUBMISSION_MESSAGES;

/**
 * Contact component
 * @description Renders the contact information and contact form
 * @returns {JSX.Element}
 */
const Contact = (): JSX.Element => {
    const formRef: MutableRefObject<any> = useRef();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * @description - Handles the form submission
     * @param {FormEvent} event
     */
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                USER_ID
            )
            .then(
                (result) => {
                    toast(SUCCESS_MESSAGE, {
                        backgroundColor: '#59b256',
                    });
                    setIsLoading(false);
                },
                (error) => {
                    toast.error(FAILURE_MESSAGE);
                    setIsLoading(false);
                },
            );
    };

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <FaMobile className="contact-icon"/>
                            {PHONE_NUMBER}
                        </div>
                        <div className="contact-info-item">
                            <FaAt className="contact-icon"/>
                            {EMAIL}
                        </div>
                        <div className="contact-info-item">
                            <FaMapMarker className="contact-icon"/>
                            {ADDRESS}
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="text" placeholder="Subject" name="user_subject" required/>
                        <input type="text" placeholder="Email" name="user_email" required/>
                        <textarea rows={5} placeholder="Message" name="user_message" required/>
                        <button disabled={isLoading} className="contact-button">
                            Submit
                            {
                                isLoading &&
                                <span className="contact-spinner">
                                    <Spinner theme="dots2" size="1rem" color="#ffffff" backgroundColor="#59b256"/>
                                </span>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
