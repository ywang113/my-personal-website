import React from 'react'
import {Switch , Route, Link} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Loader from './components/Loader'
import './App.css';


function App() {
  return (
      <div>
      < Link to="/">Home</Link>
      < Link to="/about">About</Link>
      <Loader />
      < Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/about">
              <About />
          </Route>
      </Switch>
  </div>
  );
}

export default App;
