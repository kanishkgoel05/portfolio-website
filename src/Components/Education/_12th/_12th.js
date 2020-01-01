import React from 'react';
import logo from '../../../Utils/logo/SchoolLogo.png';
import '../education.css';

const _12th = () => {
    return(
        <div className="container">
            <div className="education-card">
                <div className="education-college">
                    <div><img src={logo} className="college-logo" alt="college logo"/></div>
                    <div>D.A.V. Public School</div>
                    <div>2014 - 2015</div>
                </div>
                <div className="education-type">
                    <div>12th (CBSE Board) </div>
                </div>
            </div>
        </div>
    )
}

export default _12th;