import Reflux from 'reflux'

import ref from '../ref'

const actions = Reflux.createActions({
  add: { asyncResult: true }
})

actions.add.listen((params) => {
  const auth = ref.getAuth()

  if(!params || !auth) {
    actions.add.failed()
  } else {
    const key = ref.child('feed').child(auth.uid).push(params, error => {
      if(error) {
        actions.add.failed()
      } else {
        actions.add.completed()
      }
    })
  }
})

export default actions
