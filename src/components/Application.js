import React from 'react'

import ref from '../ref'
import AuthenticationActions from '../actions/Authentication'
import Login from './Login'
import Logout from './Logout'
import Feed from './Feed'

export default class Application extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: ref.getAuth()
    }
  }

  onLogin(auth) {
    this.setState({
      auth: auth
    })
  }

  onLogout() {
    this.setState({
      auth: null
    })
  }

  componentDidMount() {
    AuthenticationActions.login.completed.listen(this.onLogin.bind(this))
    AuthenticationActions.logout.completed.listen(this.onLogout.bind(this))
  }

  render() {
    const auth = this.state.auth

    if(!auth) {
      return <Login />
    }

    return (
      <div>
        <Logout />
        <Feed uid={auth.uid} />
      </div>
    )
  }
}
