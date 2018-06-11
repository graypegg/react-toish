import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

declare const global: any

global.Date.now = jest.fn(() => 0)

global.store = configureStore

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

configure({ adapter: new Adapter() })