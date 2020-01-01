import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './header.css'

const header = () => {
    return(
        <Router>
            <div className="header-head">
                <div className="header-name">
                Kanishk Goel
                </div>
                <div className="header-link">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </Router>
    )
}

export default header;