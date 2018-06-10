import * as React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import PageHome from './PageHome/PageHome'

import './App.css'

function App (): JSX.Element {
  return (
    <div className="App__wrapper">
      <Link to="/one">One</Link>
      <Link to="/two">Two</Link>
      
      <Switch>
        <Route path="/one" component={ PageHome } />
      </Switch>
    </div>
  )
}

export default App
