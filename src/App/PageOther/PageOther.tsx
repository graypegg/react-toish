import * as React from 'react'

import Counter from 'App/components/Counter/Counter'

function PageOther (): JSX.Element {
  return (
    <div className="page">
      <h1>It works!</h1>
      <Counter showNumber />
    </div>
  )
}

export default PageOther
