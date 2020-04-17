import React from 'react';

import styled from 'styled-components'
import me from '../Assets/images/me.jpg'

const Bio = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 70px;
    width: 85%;
    padding: 60px 0;
    height: 400px;

    img {
        border-radius: 50%;
        margin-top: 56px;
        margin-left: 50px;
    }

    .bio {
        width: 900px;
        font-size: 32px;
        display: flex;
    }

    .write-up {
        display: flex;
        flex-direction: column;
    }

    @media(max-width:768px) {
        .bio {
            display: flex;
            flex-direction: column;
            margin-top: -60px;
            font-size: 28px;
        }

        img {
            margin: 0 auto;
            height: 265px;
        }
    }

    @media(max-width:550px) {
        margin-top: 200px;
    }

    @media(max-width:480px) {
        margin-top: 180px;
        margin-bottom: 150px;
        font-size: 22px;
    }
`

const Home = () => {
    return (
        <Bio>
            <div className='bio'>
                <div className="write-up">
                    <p>Hi! I am David Kuseh, a Full Stack Web Developer based in Accra, Ghana. </p>
                    <p>I have skills ranging from vanilla JavaScript, ReactJS, NodeJS, Express to REST APIs. When I am not working on projects I avidly follow various sporting events.</p>
                </div>
                <img src={me} alt='me' width='250px' height='250px'/>  
            </div>
        </Bio>
    );
};

export default Home;