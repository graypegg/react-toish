import { IState } from '../../types'
import { Action } from 'redux'
import defaultState from '../defaultState'

export default function exampleReducer (state: IState = defaultState, action: Action): IState {
  return {
    ...state,
    i: action.type 
  }
}