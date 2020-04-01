import React from 'react';

// import styled from 'styled-components'
import twitter from '../Assets/icons/twitter.png'
import github from '../Assets/icons/github.png'
import linkedIn from '../Assets/icons/linkedin.png'


const Footer = () => {
    return (
        <div>
            <div className='icons'>
                <a href="https://twitter.com/DKuseh" rel = "noopener noreferrer" target="_blank"><img src={twitter} alt="twitter link" width="60px" height="60px"/></a>
                <a href="https://github.com/DavidKuseh" rel = "noopener noreferrer" target="_blank"><img src={github} alt="twitter link" width="60px" height="60px"/></a>
                <a href="https://www.linkedin.com/in/david-kuseh/" rel = "noopener noreferrer" target="_blank"><img src={linkedIn} alt="twitter link" width="60px" height="60px"/></a>
            </div>
            <div>
                <p>Copyright &copy; 2020 by David Kuseh</p>
            </div>
        </div>
    );
};

export default Footer;