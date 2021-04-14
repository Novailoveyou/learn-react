import React, { Fragment, Component } from 'react'
import './App.css'

class App extends Component {
  foo2 = () => 'Bars'

  render() {
    const name = 'John Doe'
    const loading = false
    const showName = true

    // if (loading) {
    //   return <h4>Loading...</h4>
    // }

    const foo = () => 'Bar'

    return (
      <Fragment>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName && this.foo2()}</h1>
        )}
      </Fragment>
    )
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hello from React')
    // )
  }
}

export default App
