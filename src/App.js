import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.reduceNum}>-</button>
        <button onClick={this.props.plusNum}>+</button>
      </div>
    )
  }
}

const getState = state => ({ num: state.num })

const dispatchState = dispatch => ({
  reduceNum: () => dispatch({
    type: 'reduce',
    value: 1
  }),
  plusNum: () => dispatch({
    type: 'plus',
    value: 1
  })
})

export default connect(getState, dispatchState)(App)
