import React from 'react'
import './App.css'
import {Link, Route} from 'react-router-dom'

import Home from './Components/Home'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import logo from '../src/Assets/icons/logo.png'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid black;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    background-color: #008DD5;

    .link {
      display: flex;
      justify-content: space-between;
      margin: 0px 25px;
      width: 450px;
      align-items: center;
      color: #008DD5;
      font-size: 32px;
    }

    .logo {
      display: flex;
      width: 250px;

      p {
        text-decoration: none;
        font-size: 32px;
      }
    }

    a {
      display: flex;
      text-decoration: none;
      padding: 15px;
      border-radius: 15%;
      color: black;
    }

    a:nth-child(2):nth-child(5) :hover {
      color: black;
      text-decoration: underline;
    }

    a:visited {
      color: black;
    }

    img {
      border-radius: 15%;
    }

    @media(max-width:550px) {
      margin: 0 auto;
      .link{
        margin-left: -5px;
      }
      .write-up {
        margin-top: 40px;
      }
    }

    @media(max-width:480px) {
      margin: 0 auto;

      .link {
        display: flex;
        flex-direction: column;
        margin: 0 auto 30px auto;
        width: 200px;
      }

      .write-up {
        margin-top: 40px;
      }

      img:nth-child(1) {
        visibility: hidden;
        width: 0px;
      }
    }

  `

function App() {
  return (
    <div className="App">
      <Nav>
        <div className="logo">
          <a href="portfolio-davidkuseh.vercel.app" rel = "noopener noreferrer"><img src={logo} alt='logo' width='76px' height='77px'/>
          <p>Dev Dave</p>
          </a> 
        </div>
        <div className='link'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <a href="https://1drv.ms/b/s!AhtH5iCnHHmvlS2T4z_aqYsh4Gnh?e=eCJ6ac" rel = "noopener noreferrer" target="_blank">Resume</a>
          <a href="mailto:kusehdavidS@gmail.com">Contact</a>
        </div>
      </Nav>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/projects' component={Projects} />
      <Footer />
    </div>
  );
}

export default App;
 