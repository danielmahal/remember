import React from 'react'

import AuthenticationActions from '../actions/Authentication'

export default class Logout extends React.Component {
  logout() {
    AuthenticationActions.logout()
  }

  render() {
    return <button onClick={this.logout.bind(this)}>Logout</button>
  }
}
