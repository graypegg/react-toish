import * as React from 'react'
import { shallow } from 'enzyme'
import PageHome from './PageHome'

it('renders without crashing', () => {
  shallow(<PageHome />)
})
