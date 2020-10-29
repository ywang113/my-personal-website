import React, {useState} from 'react'
import {Switch , Route, Link} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Loader from './components/Loader'
import './App.css';



function App() {
    const [isLoading, setIsLoading] = useState(true)
    window.addEventListener('load' ,()=>{
        setIsLoading(false)
    })
  return (
      <>
        <Loader isLoading = {isLoading}/>
        <div>
            
            < Link to="/">Home</Link>
            < Link to="/about">About</Link>
            < Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
      </>

  );
}

export default App;
