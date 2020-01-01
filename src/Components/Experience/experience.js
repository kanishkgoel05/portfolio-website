import React,{useState} from 'react';
import './experience.css';
import Experience1 from './Experiences/experience1';
import Experience2 from './Experiences/experience2';

const Experience = () => {

    const [exp1,setexp1] = useState(false);
    const [exp2,setexp2] = useState(false);
    const [noexp,setnoexp] = useState(true);

    const showContent = (showExp) => {
        if(showExp === 'exp1') {
            setnoexp(false);
            setexp1(true);
            setexp2(false);
        } 
        else if (showExp === 'exp2') {
            setexp1(false);
            setnoexp(false);
            setexp2(true);
        }
    }

    return (
        <div className="experience-start">
            <div className="experience">
                Experience
            </div>
            <div className="experience-type">
                <div className="experience-head">
                    <div onClick={() => showContent("exp1")} className="experience-head-con">
                        <div>L2 Support Enginner (OYO)</div>
                        <div>July 2019 - Present</div>
                    </div>
                    <div onClick={() => showContent("exp2")} className="experience-head-con">
                        <div>L2 Support Enginner Intern (OYO)</div>
                        <div>January 2019 - July 2019</div>
                    </div>
                </div>
                <div>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="experience-content">
                        {noexp && <div>
                            Click on experience to see the details
                            </div>}
                        {exp1 && <Experience1/>}
                        {exp2 && <Experience2/>}
                </div>
            </div>
        </div>
    )
}

export default Experience;