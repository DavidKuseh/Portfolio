import React from 'react';

import anywhere from '../Assets/images/anywherefitness.JPG'
import insightly from '../Assets/images/reactblog.JPG'

const Projects = () => {


    return (
        <div>
            <h3>Projects</h3>
            <div>
                <a href="https://anywherelanding.now.sh/" rel = "noopener noreferrer" target="_blank"><h2>Anywhere Fitness</h2></a>
                <p>AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. I was part of a small team that developed the backend for the application.</p>
                <img src={anywhere} alt="anywhere fitness" />
            </div>
            <div>
                <a href="https://getinsightly.com/" rel = "noopener noreferrer" target="_blank"><h2>Insightly</h2></a>
                <p>Insightly connects writers with readers by providing a flexible environment for publishing, and then curates reading experiences for readers on the other end of the spectrum based on their preferences. This was my LABS project at Lambda School where as part of a small team we designed and built the entire application from the ground up.</p>
                <img src={insightly} alt="Insightly"/>
            </div>
        </div>
    );
};

export default Projects;