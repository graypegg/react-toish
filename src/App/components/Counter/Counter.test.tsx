import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

import { store } from 'store'

it('renders a number when showNumber=true', () => {
  const component = shallow(<Counter showNumber store={store} />).dive()
  expect(component.find('h1').text()).toBe('10')
})

it('does not render a number when showNumber=false', () => {
  const component = shallow(<Counter showNumber={false} store={store} />).dive()
  expect(component.find('h1').text()).toBe('?')
})