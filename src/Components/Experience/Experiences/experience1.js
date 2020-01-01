import React from 'react';
import './experienceData.css';

const Experience1 = () => {
    return (
        <div className="experience-data">
            <ul>
                <li>Handle L1 Support Team
                    <ul>
                        <li>Give them product training</li>
                        <li>Forward solution for the issue occur with the well-designed scripts</li>
                        <li>Take care of their learning and productivity by giving them new tasks</li>
                    </ul>
                </li>
                <li>Issues Diagnostics
                    <ul>
                        <li>Diagnosed the issue using Database and Kibana</li>
                        <li>If Required asked the property where they has faced the issue so that
                            creates the scenarios and find out the root cause
                        </li>
                        <li>Provide the scenarios to the team so that they can fix it</li>
                    </ul>
                </li>
                <li>Little bit Data Analysis
                    <ul>
                        <li>Deep dive the database to find out issue</li>
                        <li>Find out the issue via data which can cause the future problems and try to resolve it 
                            at the earliest with the help of operations and software team
                        </li>
                        <li>Use SQL,mongodb queries and nodejs scripts to fetch the data required
                            and apply some logic so that data can say something.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Experience1;