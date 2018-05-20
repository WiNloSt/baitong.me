import React from 'react'

import { FirstSection } from './FirstSection'
import { SecondSection } from './SecondSection'

export default () => (
  <React.Fragment>
    <FirstSection />
    <SecondSection />
    <div className="mb5">
      <div className="container">
        <h2 className="tc normal f4 mb4">WORK EXPERIENCES</h2>
        <div className="w-50 ml-auto pv3 pl5">
          <h2 className="f5 normal ma0">PRODUCER</h2>
          <p className="f5 mt0">2015 - 2018 at Teapot Studio</p>
          <p className="text-grey">
            - Manage project from conception through deployment, and act as both a customer partnet
            and an internal team leader.
          </p>
          <p className="text-grey">
            - Manage daily project assignments, provide team direction and lead team meeting to
            complete projects with clear objectives, agendas and outcomes.
          </p>
          <p className="text-grey mb0">
            - Coordinate between different internal teams to ensure high work quality and
            consistency.
          </p>
        </div>
        <div className="w-50 pv3 pr5 tr">
          <h2 className="f5 normal ma0">2D Arkavis</h2>
          <p className="f5 mt0">2014 - 2015 at Teapot Studio</p>
          <p className="text-grey">- Produce high quality artworks following UI/UX standards.</p>
          <p className="text-grey mb0">
            - Create and deliver artworks to customers according to requirements.
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
)
