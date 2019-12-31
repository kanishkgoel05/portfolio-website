import React from 'react';
import TechnicalSkills from './Techinical Skills/technicalSkills';
import InterpersonalSkills from './Interpersonal Skills/interpersonalSkill';
import './skills.css'

const Skills = () => {
    return (
        <div className="skills-start">
            <TechnicalSkills/>
            <InterpersonalSkills/>
        </div>
    )
}

export default Skills;