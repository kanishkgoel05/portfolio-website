import React from 'react';
import Tools from './tool';
import Languages from './languages';
import './technicalSkills.css';

const TechnicalSkills = () => {
    return (
        <div className="techincal-skills">
            <div className="personal-head">
                Techincal (IT) Skills
            </div>
            <div className="skill-tool">
                <Tools/>
                <Languages/>
            </div>
        </div>
    )
}

export default TechnicalSkills;