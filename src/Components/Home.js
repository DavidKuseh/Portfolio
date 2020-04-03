import React from 'react';

import styled from 'styled-components'
import setup from '../Assets/images/setup.jpg'

const Bio = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 60px auto;
    width: 85%;
    padding: 120px 0;
    height: 400px;

    img {
        border-radius: 20%
    }

    .bio {
        width: 600px;
        font-size: 68px;
    }
`

const Home = () => {
    return (
        <Bio>
            <div className='bio'>
                <p>Hi! I am David, a Full Stack Web Developer and sports enthusiast </p>
            </div>
            <div>
                <img src={setup} alt='setup' width='350px' height='250px'/>
            </div>
        </Bio>
    );
};

export default Home;