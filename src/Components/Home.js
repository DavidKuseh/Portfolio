import React from 'react';

import me from '../Assets/images/me.jpg'

const Home = () => {
    return (
        <div>
            <p>Hi! I am David Kuseh, a Full Stack Web Developer and sports enthusiast </p>
            <img src={me} alt='me'/>
        </div>
    );
};

export default Home;