import React from 'react'
import { Link } from '../components/Link'
import { RabbitIcon } from '../components/RabbitIcon'

export default () => (
  <div className="container pv3 pv5-ns">
    <h1 className="tc normal f3 f2-ns">
      Sorry... This page is under construction.{' '}
      <Link to="/" className="nowrap">
        <i className="fas fa-home mr2" />Back home
      </Link>
    </h1>
    <div className="w-80 w-50-ns center mt3">
      <RabbitIcon fill="pink" />
    </div>
  </div>
)
