import { Action } from 'redux'

export interface IExampleReducerState {
  i: number
}

export const exampleReducerState = {
  i: 10
}

export function exampleReducer (
  state: IExampleReducerState = exampleReducerState,
  action: Action): IExampleReducerState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        i: state.i + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        i: state.i - 1
      }
    default:
      return state
  }
}