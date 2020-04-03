import React from 'react';

import styled from 'styled-components'
import setup from '../Assets/images/setup.jpg'

const Bio = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 80px auto;
    width: 85%;
    padding: 120px 0;
    height: 400px;

    img {
        border-radius: 20%
    }
`

const Home = () => {
    return (
        <Bio>
            <div>
                <p>Hi! I am David Kuseh, a Full Stack Web Developer and sports enthusiast </p>
            </div>
            <div>
                <img src={setup} alt='setup' width='350px' height='250px'/>
            </div>
        </Bio>
    );
};

export default Home;