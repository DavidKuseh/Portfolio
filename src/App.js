import React from 'react'
import './App.css'
import {Link, Route} from 'react-router-dom'

import About from './Components/About'
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
      width: 500px;
      align-items: center;
      color: #090C9B;
      font-size: 32px;

      Link {
        padding: 10px;
      }
    }

    a {
      text-decoration: underline;
      padding: 10px;
      border-radius: 15%;
    }

    a:hover {
      background-color: white;
      color: black;
      text-decoration: none;
      transition: 0.3s	ease-out;
      // font-size: 35px;
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
        <img src={logo} alt='logo'/>
        <div className='link'>
          <Link to='/' >Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/about' >About</Link>
          <a href='http://www.google.com' rel = "noopener noreferrer" target="_blank">Resume</a>
        </div>
      </Nav>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/projects' component={Projects} />
      <Route exact path = '/about' component={About} />
      <Footer />
    </div>
  );
}

export default App;
 