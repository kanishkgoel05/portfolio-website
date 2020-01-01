import React from 'react';
import College from './College/college';
import _12th from './_12th/_12th';
import _10th from './_10th/_10th';
import './education.css';

const Education = () =>{
    return (
        <div className="education-start" id="education">
            <College/>
            <_12th/>
            <_10th/>
        </div>
    )
}

export default Education;