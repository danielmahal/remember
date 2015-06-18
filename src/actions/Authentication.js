import Reflux from 'reflux'

import ref from '../ref'

const actions = Reflux.createActions({
  login: { asyncResult: true },
  logout: { asyncResult: true }
})

actions.login.listen(() => {
  console.log('Login')

  ref.authWithOAuthPopup('twitter', (error, auth) => {
    if(error) {
      actions.login.failed()
    } else {
      actions.login.completed(auth)
    }
  })
})

actions.logout.listen(() => {
  console.log('Logout')

  ref.unauth()
  actions.logout.completed()
})

export default actions
