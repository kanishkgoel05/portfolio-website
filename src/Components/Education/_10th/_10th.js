import React from 'react';
import logo from '../../../Utils/logo/SchoolLogo.png';
import '../education.css'

const _10th = () => {
    return(
        <div className="container">
            <div className="education-card">
                <div className="education-college">
                    <div><img src={logo} className="college-logo" alt="10 class logo"/></div>
                    <div>D.A.V Public School</div>
                    <div>2012 - 2013</div>
                </div>
                <div className="education-type">
                    <div>10th (CBSE Board) </div>
                </div>
            </div>
        </div>
    )
}

export default _10th;