import React from 'react'
import styled from 'styled-components'

import { FirstSection } from './FirstSection'
import musicPlayer from './assets/music-player.png'
import { Link } from '../../components/Link'

const SecondSection = styled.div`
  background-color: #f7f7f7;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: unset;
  }

  > img {
  }

  > div {
  }
`

const ImageContainer = styled.div`
  flex: 1.4;
  min-width: 200px;
  max-width: 673px;
`

const Header = styled.h2`
  position: relative;
  align-self: flex-start;
  font-size: 40px;

  ::before {
    content: 'more of my ideas';
    font-size: 20px;
    color: #999;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(1.5em, 1em);
    display: block;
  }
`

export default () => (
  <React.Fragment>
    <FirstSection />
    <SecondSection>
      <div className="container pa3 pt5">
        <FlexContainer>
          <ImageContainer>
            <img src={musicPlayer} alt="Music player UI" />
          </ImageContainer>
          <div className="flex-1 pl4 flex flex-column justify-center">
            <Header className="normal pl5-ns mr4 nowrap">MY PORTFOLIO</Header>
            <p style={{ lineHeight: 2 }}>
              I create my arts from many inspirations with dedication. I made different styles of
              arts to pratice and improve my skills. I hope my artworks will inspire you and hope
              you love my works. Thank you!
            </p>
            <Link className="self-start" to="/">
              see more
            </Link>
          </div>
        </FlexContainer>
      </div>
    </SecondSection>
  </React.Fragment>
)
