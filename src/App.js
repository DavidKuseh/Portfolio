import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'

import About from './Components/About'
import Home from './Components/Home'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <Link to='/' >Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about' >About</Link>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/projects' component={Projects} />
      <Route exact path = '/about' component={About} />

    </div>
  );
}

export default App;
 