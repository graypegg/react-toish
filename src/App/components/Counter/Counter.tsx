import * as React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { increment, decrement } from 'store/actions'
import { IState } from 'store'

interface ICounterProps {
  onIncrement?: () => void,
  onDecrement?: () => void,
  currentNumber?: number,
  showNumber: boolean
}

interface ICounterState {

}

class Counter extends React.Component<ICounterProps, ICounterState> {
  public render(): JSX.Element {
    return (
      <div className="counter__wrapper">
        {
          this.props.showNumber
            ? <h1>{ this.props.currentNumber }</h1>
            : <h1>?</h1>
        }
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

function mapStateToProps (state: IState, ownProps: ICounterProps): ICounterProps {
  return {
    ...ownProps,
    currentNumber: state.exampleReducer.i
  }
}

function mapDispatchToProps (dispatch: Dispatch, ownProps: ICounterProps): ICounterProps {
  return {
    ...ownProps,
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
