import { combineReducers } from 'redux'

/* Import all reducers with default states */
import { exampleReducer, IExampleReducerState, exampleReducerState } from './exampleReducer'

/* Combine all reducers into one mega-reducer */
const reducer = combineReducers({
  exampleReducer
})

/* Combine all default state types into one interface */
interface IState {
  exampleReducer: IExampleReducerState
}

/* Combine all default states into one */
const defaultState: IState = {
  exampleReducer: exampleReducerState
}

export { reducer, IState, defaultState }