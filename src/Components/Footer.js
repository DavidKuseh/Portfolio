import React from 'react';

import styled from 'styled-components'
import twitter from '../Assets/icons/twitter.png'
import github from '../Assets/icons/github.png'
import linkedIn from '../Assets/icons/linkedin.png'

const FooterStyle = styled.div`
    padding: 30px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;

    .icons {
        a {
            padding: 10px;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='icons'>
                <a href="https://twitter.com/DKuseh" rel = "noopener noreferrer" target="_blank"><img src={twitter} alt="twitter link" width="60px" height="60px"/></a>
                <a href="https://github.com/DavidKuseh" rel = "noopener noreferrer" target="_blank"><img src={github} alt="twitter link" width="60px" height="60px"/></a>
                <a href="https://www.linkedin.com/in/david-kuseh/" rel = "noopener noreferrer" target="_blank"><img src={linkedIn} alt="twitter link" width="60px" height="60px"/></a>
            </div>
            <div>
                <p>Copyright &copy; 2020 by David Kuseh</p>
            </div>
        </FooterStyle>
    );
};

export default Footer;