import React from 'react';

import styled from 'styled-components'
import me from '../Assets/images/me.jpg'

const Bio = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 80px auto;
    width: 85%;
    padding: 60px 0;
    height: 400px;

    img {
        border-radius: 20%;
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
            margin-top: -80px;
            font-size: 28px;
        }

        img {
            margin: 0 auto;
            height: 265px;
        }
    }

    @media(max-width:550px) {
        margin-top: 125px;
    }
`

const Home = () => {
    return (
        <Bio>
            <div className='bio'>
                <div className="write-up">
                    <p>Hi! I am David Kuseh, a Full Stack Web Developer and sports enthusiast </p>
                    <p>I am based in Accra, Ghana. I have skills ranging from vanilla JavaScript, ReactJS, NodeJS, Express to Python. I have had a fair amount of time working remotely in small teams to achieve various goals.</p>
                </div>
                <img src={me} alt='me' width='250px' height='250px'/>  
            </div>
        </Bio>
    );
};

export default Home;