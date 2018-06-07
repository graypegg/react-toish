import * as React from 'react'
import RouterContainer from '../RouterContainer'

import './App.css'

interface IAppProps {

}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <RouterContainer />
    )
  }
}

export default App
