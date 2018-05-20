import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import { FirstSection } from './FirstSection'
import musicPlayer from './assets/music-player.png'

const SecondSection = styled.div`
  background-color: #f7f7f7;
`

const Image = styled.img`
  flex: 1.4;
  min-width: 200px;
  max-width: 673px;
`

export default () => (
  <React.Fragment>
    <FirstSection />
    <SecondSection>
      <div className="container pa3 pt5">
        <div className="flex">
          <Image src={musicPlayer} alt="Media player UI" />
          <div className="flex-1 flex flex-column justify-center">
            <h2>MY PORTFOLIO</h2>
            <p>more of my ideas</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio
              consequuntur neque minus sint eveniet cum voluptas ea iure! Blanditiis ut error itaque
              optio fugit obcaecati porro voluptate ex fuga?
            </p>
            <Link to="/a">see more</Link>
          </div>
        </div>
      </div>
    </SecondSection>
  </React.Fragment>
)
