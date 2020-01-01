import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookSquare,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './contactme.css';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {

    return(
        <div className="contact-start" id = "contact">
            <div className="social-contact">
                <div><a href="https://www.facebook.com/kanishk.goel.54" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} color="white" className="icon1"/></a></div>
                <div><a href="https://www.linkedin.com/in/kanishk-goel-8b9943161" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} color="white" className="icon"/></a></div>
            </div>
            <div className="personal-contact">
                <div className="personal-email">   
                    <div> <FontAwesomeIcon icon={faEnvelope} color="white"/></div>
                    <div>kanishkgoel05@gmail.com</div>
                </div>
                <div className="personal-email">
                    <div><FontAwesomeIcon icon={faPhoneAlt} color="white"/></div>
                    <div>8285522278</div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe