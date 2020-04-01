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
    }

    a {
      text-decoration: none;
    }

    .footer {
      margin: 300px;
    }

  `

function App() {
  return (
    <div className="App">
      <Nav>
        <img src={logo} alt='me'/>
        <div className='link'>
          <Link to='/' >Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/about' >About</Link>
        </div>
      </Nav>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/projects' component={Projects} />
      <Route exact path = '/about' component={About} />
      <div className = 'footer'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
 