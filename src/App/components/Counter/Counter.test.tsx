import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

it('renders a number when showNumber=true', () => {
  shallow(<Counter showNumber />)
})

it('does not render a number when showNumber=false', () => {
  shallow(<Counter showNumber={false} />)
})
