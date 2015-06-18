import React from 'react'
import map from 'lodash/collection/map'

import Loader from './Loader'
import FeedItem from './FeedItem'
import FeedActions from '../actions/Feed'
import createFirebaseContainer from '../createFirebaseContainer'

class Feed extends React.Component {
  onPaste(e) {
    const data = e.clipboardData.getData('text/plain')

    if(data.length < 5000) {
      FeedActions.add({
        type: 'raw',
        data: data
      })
    }
  }

  componentDidMount() {
    document.addEventListener('paste', this.onPaste)
  }

  render() {
    const items = map(this.props.feed, (value, key) => {
      return <FeedItem key={key} {...value} />
    })

    return (
      <div>
        <h1>Feed for {this.props.uid}</h1>

        <ul>{items}</ul>

        {!items.length &&
          <p>It appears to be nothing in your feed. Paste texts or urls to get cracking.</p>
        }
      </div>
    )
  }
}

export default createFirebaseContainer(Feed, {
  loader: <Loader>Loading feed...</Loader>,

  subscribeTo: {
    feed(props) {
      return `feed/${props.uid}`
    }
  }
})
