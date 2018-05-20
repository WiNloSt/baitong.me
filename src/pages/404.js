import React from 'react'

import { RabbitIcon } from '../components/RabbitIcon'
import { Link } from '../components/Link'

export default () => (
  <div className="container pv3 pv5-ns">
    <h1 className="tc normal f3 f2-ns">
      Sorry... We can't find that carrot you're looking for.{' '}
      <Link to="/" className="nowrap">
        <i className="fas fa-home mr2" />Back home
      </Link>
    </h1>
    <div className="w-80 w-50-ns center mt3">
      <RabbitIcon fill="pink" />
    </div>
  </div>
)
