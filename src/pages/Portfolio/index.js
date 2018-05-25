import React from 'react'
import styled from 'styled-components'

import bg from './assets/bg.png'
import musicPlayer from './assets/music-player.png'
import fashion from './assets/fashion.png'
import galleryApp from './assets/gallery-app.png'
import favicon from './assets/favicon.png'
import foodApp from './assets/food-app.png'
import heroesGuardianIcons from './assets/heroes-guardian-icons.png'
import { Modal } from '../../components/Modal'
import { Toggle } from '../../components/Toggle'

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    flex: 33%;
    min-width: 280px;
    box-sizing: border-box;
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
  <Toggle>
    {({ on, setOn, ...props }) => {
      return (
        <React.Fragment>
          <Container className="container mb3 mb5-ns">
            <h2 className="normal text-grey tc pt3 pt5-ns">ARTWORK</h2>
            <FlexContainer>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={musicPlayer} alt="Music player UI" />
                </a>
              </div>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={fashion} alt="Fashion website UI" />
                </a>
              </div>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={galleryApp} alt="Gallery application UI" />
                </a>
              </div>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={favicon} alt="Favicon UI" />
                </a>
              </div>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={foodApp} alt="Healthy Sweet UI" />
                </a>
              </div>
              <div>
                <a onClick={() => setOn(true)}>
                  <img src={heroesGuardianIcons} alt="Heroes Guardian in-game icons" />
                </a>
              </div>
            </FlexContainer>
          </Container>
          <Modal open={on} onClose={() => setOn(false)}>
            <img src={heroesGuardianIcons} alt="" />
          </Modal>
        </React.Fragment>
      )
    }}
  </Toggle>
)
