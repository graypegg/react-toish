import { createStore, Store } from 'redux'

import reducer from './reducers'

const store = createStore(reducer) as Store

export default store