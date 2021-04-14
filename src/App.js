import React, { Fragment, Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello from React</h1>
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
