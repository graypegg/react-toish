import * as React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { increment, decrement } from 'store/actions'
import { IState } from 'store'

interface ICounterProps {
  onIncrement?: () => void,
  onDecrement?: () => void,
  currentNumber?: number
}

interface ICounterState {

}

class Counter extends React.Component<ICounterProps, ICounterState> {
  public render(): JSX.Element {
    return (
      <div className="counter__wrapper">
        <h1>{ this.props.currentNumber }</h1>
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

function mapStateToProps (state: IState): ICounterProps {
  return {
    currentNumber: state.exampleReducer.i
  }
}

function mapDispatchToProps (dispatch: Dispatch): ICounterProps {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
