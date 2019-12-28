import React from 'react';
import './summary.css';

const Summary = () => {
    return (
        <div className="summary-start">
            <div className="summary-heading">
                Overview
            </div>
            <div className="middle-line">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="summary-content">
                <ul>
                    <li>Web Developer and aspiring Data Scientist.</li>
                    <li>Currently working as a L2 Support Engineer at OYO.</li>
                    <li>Keen to learn new things to enhance myself and 
                        bring a fruitful results that will benefits the organisation.
                    </li>
                    <li>
                        Hobbies
                        <ul>
                            <li>Reading Books</li>
                            <li>Listening Music</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Summary;