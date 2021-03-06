import React from 'react';

import styled from 'styled-components'
import twitter from '../Assets/icons/twitter.png'
import github from '../Assets/icons/github.png'
import linkedIn from '../Assets/icons/linkedin.png'

const FooterStyle = styled.div`
    padding: 30px;
    position: static;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;

    .icons {
        a {
            padding: 10px;
        }
    }

    @media(max-width:768px) {
        .icons {
            margin-left: -40px;
            margin-top: 45px;
        }
    }

`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='icons'>
                <a href="https://twitter.com/DKuseh" rel = "noopener noreferrer" target="_blank"><img src={twitter} alt="twitter link" width="25px" height="25px"/></a>
                <a href="https://github.com/DavidKuseh" rel = "noopener noreferrer" target="_blank"><img src={github} alt="twitter link" width="25px" height="25px"/></a>
                <a href="https://www.linkedin.com/in/david-kuseh/" rel = "noopener noreferrer" target="_blank"><img src={linkedIn} alt="twitter link" width="25px" height="25px"/></a>
            </div>
        </FooterStyle>
    );
};

export default Footer;