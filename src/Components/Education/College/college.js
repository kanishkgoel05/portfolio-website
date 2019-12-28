import React from 'react';
import logo from '../../../Utils/logo/ABESEC_logo.png';
import '../education.css';

const college = () => {
    return (
        <div className="container">
            <div className="education-card">
                <div className="education-college">
                    <div ><img src={logo} className="college-logo"/></div>
                    <div>ABES Engineering College</div>
                    <div>2015 - 2019</div>
                </div>
                <div className="education-type">
                    <div>B.Tech (AKTU University)</div> 
                    <div>Computer Science & Engineering</div>
                </div>
            </div>
        </div>
    )
}

export default college