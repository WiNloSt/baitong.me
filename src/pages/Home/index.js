import React from 'react'
import styled from 'styled-components'

import { FirstSection } from './FirstSection'
import { SecondSection } from './SecondSection'
import circle from './assets/circle.png'
import line from './assets/line.png'

const circleStyle = `
::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  background-image: url(${circle});
}
`

const WorkExperience = styled.div`
  position: relative;

  ${circleStyle};

  ::before,
  ::after {
    transform: translateX(${props => (props.right ? '-50%' : '50%')});
    ${props => (props.right ? 'left: 0;' : 'right: 0;')};
  }

  &:not(:last-child)::after {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    top: 38px;
    bottom: -16px;
    background-image: url(${line});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default () => (
  <React.Fragment>
    <FirstSection />
    <SecondSection />
    <div className="mb5">
      <div className="container">
        <h2 className="tc normal f4 mb4">WORK EXPERIENCES</h2>
        <WorkExperience right className="w-50 ml-auto pv3 pl5 pr3">
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
        </WorkExperience>
        <WorkExperience className="w-50 pv3 pr5 pl3 tr">
          <h2 className="f5 normal ma0">2D Arkavis</h2>
          <p className="f5 mt0">2014 - 2015 at Teapot Studio</p>
          <p className="text-grey">- Produce high quality artworks following UI/UX standards.</p>
          <p className="text-grey mb0">
            - Create and deliver artworks to customers according to requirements.
          </p>
        </WorkExperience>
      </div>
    </div>
  </React.Fragment>
)
