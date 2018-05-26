import React from 'react'
import styled, { css } from 'styled-components'

import circle from './assets/circle.png'
import line from './assets/line.png'

const circleStyle = css`
  width: 24px;
  height: 24px;
  background-image: url(${circle});
`

const lineStyle = css`
  position: absolute;
  width: 4px;
  top: 0;
  bottom: 0;
  background-image: url(${line});
  background-repeat: no-repeat;
  background-size: cover;
`

const workExperienceStyle = css`
  max-width: 500px;
  margin: auto;
`

const WorkExperienceRight = styled.div`
  ${workExperienceStyle};
  position: relative;

  ::before,
  ::after {
    transform: translateX(-50%);
    left: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    max-width: unset;
    margin-left: auto;
    margin-right: unset;

    ::before,
    ::after {
      left: 0rem;
    }
  }
`
const WorkExperienceLeft = styled.div`
  ${workExperienceStyle};

  position: relative;
  padding-right: 1rem;
  padding-left: 4rem;

  ::before,
  ::after {
    transform: translateX(-50%);
    left: 2rem;
    right: unset;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    max-width: unset;
    margin-left: unset;
    text-align: right;
    padding-right: 4rem;
    padding-left: 1rem;

    ::before,
    ::after {
      transform: translateX(50%);
      left: unset;
      right: 0;
    }
  }
`

const Circle = styled.div`
  ${circleStyle};

  vertical-align: top;

  ${props => (props.left ? 'transform: translateX(50%)' : '')};
  ${props => (props.right ? 'transform: translateX(-50%)' : '')};
`

const Line = styled.div`
  ${lineStyle};

top: 24px;
  transform: translateX(-50%);
`

export const ThirdSection = () => (
  <div className="mb5">
    <div className="container">
      <h2 className="tc normal f4 mt5 mb4">WORK EXPERIENCES</h2>
      <div className="tr relative">
        <Circle left className="dib" />
        <Line left className="dib" />
        <WorkExperienceRight className="dib pl5 pr3 tl">
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
        </WorkExperienceRight>
      </div>
      <div>
        <WorkExperienceLeft className="dib">
          <h2 className="f5 normal ma0">2D Arkavis</h2>
          <p className="f5 mt0">2014 - 2015 at Teapot Studio</p>
          <p className="text-grey">- Produce high quality artworks following UI/UX standards.</p>
          <p className="text-grey mb0">
            - Create and deliver artworks to customers according to requirements.
          </p>
        </WorkExperienceLeft>
        <Circle right className="dib" />
      </div>
    </div>
  </div>
)
