import * as React from 'react'

interface IPageHomeProps {

}

interface IPageHomeState {

}

class PageHome extends React.Component<IPageHomeProps, IPageHomeState> {
  public render(): JSX.Element {
    return (
      <div className="page">
        Hey!
      </div>
    )
  }
}

export default PageHome
