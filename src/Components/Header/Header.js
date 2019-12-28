import React from 'react';
import './header.css'

const header = () => {
    return(
        <div className="header-head">
            <div className="header-name">
            Kanishk Goel
            </div>
            <div className="header-link">
               <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About Me</a></li>
                   <li><a href="#">Projects</a></li>
                   <li><a href="#">Contact</a></li>
               </ul>
            </div>
        </div>
    )
}

export default header;