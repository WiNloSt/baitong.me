import React from 'react'
import styled from 'styled-components'

import bg from './assets/bg.png'
import musicPlayer from './assets/music-player.png'
import fashion from './assets/fashion.png'
import galleryApp from './assets/gallery-app.png'
import favicon from './assets/favicon.png'
import foodApp from './assets/food-app.png'
import heroesGuardianIcons from './assets/heroes-guardian-icons.png'

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  margin-bottom: -937px !important; /* Because injectGlobal comes last :(((*/
  padding-bottom: 937px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    box-sizing: border-box;
    max-width: 400px;
    padding: 0.5em;
    transition: transform 0.5s;

    > img {
      border-radius: 0.25em;
      box-shadow: 0.25em 0.25em 0.25em 0px #999;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`

export default () => (
  <React.Fragment>
    <Container className="container">
      <h2 className="normal text-grey tc pt3 pt5-ns"> ARTWORK</h2>
      <FlexContainer>
        <div>
          <img src={musicPlayer} alt="Music player UI" />
        </div>
        <div>
          <img src={fashion} alt="Fashion website UI" />
        </div>
        <div>
          <img src={galleryApp} alt="Gallery application UI" />
        </div>
        <div>
          <img src={favicon} alt="Favicon UI" />
        </div>
        <div>
          <img src={foodApp} alt="Healthy Sweet UI" />
        </div>
        <div>
          <img src={heroesGuardianIcons} alt="Heroes Guardian in-game icons" />
        </div>
      </FlexContainer>
    </Container>
  </React.Fragment>
)
