import React from 'react'
import styled from 'styled-components'

import bg from './assets/bg.png'
import musicPlayer from './assets/music-player.png'
import fashion from './assets/fashion.png'
import fashionPopup from './assets/fashion-popup.png'
import galleryApp from './assets/gallery-app.png'
import galleryAppPopup from './assets/gallery-app-popup.png'
import favicon from './assets/favicon.png'
import foodApp from './assets/food-app.png'
import foodAppPopup from './assets/food-app-popup.png'
import heroesGuardianIcons from './assets/heroes-guardian-icons.png'
import heroesGuardianIconsPopup from './assets/heroes-guardian-icons-popup.png'
import heroesGuardianWeb from './assets/heroes-guardian-web.png'
import heroesGuardianWebPopup from './assets/heroes-guardian-web-popup.png'
import crocodileMeseum from './assets/crocodile-meseum.png'
import crocodileMeseumPopup from './assets/crocodile-meseum-popup.png'
import { Modal } from '../../../components/Modal'
import { Toggle } from '../../../components/Toggle'
import { canUseDOM } from '../../../utils'

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;

  > div {
    flex: 1;
    min-width: 280px;
    box-sizing: border-box;
    padding: 0.5em;
    transition: transform 0.5s;

    /* 2 column */
    @media only screen and (min-width: 560px) {
      flex: 0 0 50%;
    }

    /* 3 column */
    @media only screen and (min-width: 840px) {
      flex: 0 0 33%;
    }

    > img {
      border-radius: 0.25em;
      box-shadow: 0.25em 0.25em 0.25em 0px #999;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`

const PreloadImage = () => {
  if (canUseDOM()) {
    const images = [
      fashionPopup,
      galleryAppPopup,
      foodAppPopup,
      heroesGuardianIconsPopup,
      heroesGuardianWebPopup,
      crocodileMeseumPopup
    ]
    images.forEach(image => {
      const img = new window.Image()
      img.src = image
    })
  }
  return null
}

export default class extends React.Component {
  state = {
    currentImageSrc: null
  }

  render() {
    return (
      <Toggle>
        {({ on, setOn }) => {
          const createOnClick = image => () => {
            this.setState({
              currentImageSrc: image
            })
            setOn(true)
          }

          return (
            <React.Fragment>
              <Container className="container mb3 mb5-ns">
                <h2 className="normal text-grey tc pt3 pt4-ns">ARTWORK</h2>
                <FlexContainer>
                  <div>
                    <a onClick={createOnClick(musicPlayer)}>
                      <img src={musicPlayer} alt="Music player UI" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(fashionPopup)}>
                      <img src={fashion} alt="Fashion website UI" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(galleryAppPopup)}>
                      <img src={galleryApp} alt="Gallery application UI" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(favicon)}>
                      <img src={favicon} alt="Favicon UI" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(foodAppPopup)}>
                      <img src={foodApp} alt="Healthy Sweet UI" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(heroesGuardianIconsPopup)}>
                      <img src={heroesGuardianIcons} alt="Heroes Guardian in-game icons" />
                    </a>
                  </div>
                  <div>
                    <a onClick={createOnClick(heroesGuardianWebPopup)}>
                      <img src={heroesGuardianWeb} alt="Heroes Guardian web" />
                    </a>
                  </div>
                </FlexContainer>
                <h2 className="normal text-grey tc pt3 pt4-ns">PRODUCER PROJECTS</h2>
                <FlexContainer>
                  <div>
                    <a onClick={createOnClick(crocodileMeseumPopup)}>
                      <img src={crocodileMeseum} alt="Crocodile museum web" />
                    </a>
                  </div>
                </FlexContainer>
              </Container>
              <Modal full size="large" open={on} onClose={() => setOn(false)}>
                <img src={this.state.currentImageSrc} alt="Image showcase" />
              </Modal>
              <PreloadImage />
            </React.Fragment>
          )
        }}
      </Toggle>
    )
  }
}
