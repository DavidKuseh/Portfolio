import React from 'react';

import styled from 'styled-components'
import me from '../Assets/images/me.jpg'

const Bio = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 200px 0px;
`

const Home = () => {
    return (
        <Bio>
            <img src={me} alt='me'/>
            <p>Hi! I am David Kuseh, a Full Stack Web Developer and sports enthusiast </p>
        </Bio>
    );
};

export default Home;