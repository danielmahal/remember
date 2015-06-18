import React from 'react'

import AuthenticationActions from '../actions/Authentication'

export default class Login extends React.Component {
  login() {
    AuthenticationActions.login()
  }

  render() {
    return (
      <button onClick={this.login.bind(this)}>Login with Twitter</button>
    )
  }
}
