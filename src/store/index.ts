import { createStore, Store } from 'redux'

import { reducer, IState, defaultState } from './reducers'

const store = createStore(
  reducer,
  defaultState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
) as Store

export { store, IState }