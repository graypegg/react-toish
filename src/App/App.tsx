import * as React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import PageHome from './PageHome/PageHome'
import PageOther from './PageOther/PageOther'

import './App.css'

function App (): JSX.Element {
  return (
    <div className="App__wrapper">
      <Link to="/">Home</Link>
      <Link to="/other">Other</Link>
      
      <Switch>
        <Route path="/" exact component={ PageHome } />
        <Route path="/other" component={ PageOther } />
      </Switch>
    </div>
  )
}

export default App
