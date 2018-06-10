import * as React from 'react'

import { connect } from 'react-redux'
import { increment, decrement } from '../../../store/actions'
import { Dispatch } from 'redux'

interface ICounterProps {
  onIncrement?: () => void,
  onDecrement?: () => void
}

interface ICounterState {

}

class Counter extends React.Component<ICounterProps, ICounterState> {
  public render(): JSX.Element {
    return (
      <div className="counter__wrapper">
        Hey!
        <button onClick={this.props.onIncrement}>
          +
        </button>
        <button onClick={this.props.onDecrement}>
          -
        </button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch: Dispatch): ICounterProps {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(null, mapDispatchToProps)(Counter)
