import React from 'react';
import me from '../Assets/images/me.jpg'

const About = () => {


    return (
        <div>
            <img src={me} alt='me' width='150px' height='150px'/>  
            <p>I am a full stack web developer with </p>
        </div>
    );
};

export default About;