import React from 'react';
import './summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook ,faMusic, faSmile} from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className="summary-start">
            <div className="summary-heading">
                Moulding my path
            </div>
            <div className="middle-line">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="summary-content">
                <ul>
                    <li>Web Developer and aspiring Data Scientist</li>
                    <li>Working at OYO Hotels and Homes as L2 Support Engineer</li>
                    <li>
                        Hobbies :
                        <ul>
                            <li className="hobby">
                                <div><FontAwesomeIcon icon={faBook}/></div> 
                                <div>Reading Books</div>
                            </li>
                            <li className="hobby">
                                <div><FontAwesomeIcon icon={faMusic}/></div>
                                <div>Listening Music</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Summary;