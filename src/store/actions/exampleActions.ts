import { Action } from 'redux'

export function increment (): Action {
  return {
    type: 'INCREMENT'
  }
}

export function decrement (): Action {
  return {
    type: 'DECREMENT'
  }
}