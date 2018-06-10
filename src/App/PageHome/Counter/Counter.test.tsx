import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

it('renders without crashing', () => {
  shallow(<Counter />)
})
