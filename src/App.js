import React from 'react'
import './App.css'
import {Link, Route} from 'react-router-dom'

import Home from './Components/Home'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import logo from '../src/Assets/images/logo.jpg'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;

    width: 90%;
    margin: 20px 30px;

    .link {
      display: flex;
      justify-content: space-between;
      margin: 0px 25px;
      width: 450px;
      align-items: center;
      color: #008DD5;
      font-size: 32px;
    }

    a {
      text-decoration: underline;
      padding: 10px;
      border-radius: 15%;
      color: black;
    }

    a:hover {
      background-color: #008DD5;
      color: black;
      text-decoration: none;
      transition: 0.5s	ease-out;
      opacity: 1;
    }

    a:visited {
      color: black;
    }

    img {
      border-radius: 15%;
    }

  `

function App() {
  return (
    <div className="App">
      <Nav>
        <a href="https://portfolio-hwhfx9d6t.now.sh/" rel = "noopener noreferrer"><img src={logo} alt='logo' width='156px' height='77px'/></a> 
        <div className='link'>
          <Link to='/' >Home</Link>
          <Link to='/projects'>Projects</Link>
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
 