import React from 'react'

import styled from 'styled-components'
import { Grid } from '../../components/Grid'
import { FlexContainer } from '../../components/FlexContainer'
import { data } from './data'
import { Modal } from '../../components/Modal'
import { Toggle } from 'react-powerplug'
import { canUseDOM } from '../../utils'

const preloadImage = imageSrc => {
  const image = new window.Image()
  image.src = imageSrc
}

const NavBackground = styled.div`
  height: 120px;
  background-color: #ff88a5;
`
export default class extends React.Component {
  state = {
    image: '',
    altText: ''
  }

  componentDidMount() {
    if (canUseDOM()) {
      data.forEach(item => preloadImage(item.image))
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBackground />
        <Grid columns={16}>
          <Grid.Col offset={2} columns={12}>
            <FlexContainer>
              <Toggle>
                {({ on, set }) => (
                  <React.Fragment>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          set(true)
                          this.setState({
                            image: item.image,
                            altText: item.altText
                          })
                        }}>
                        <a>
                          <img src={item.thumbnail} alt={item.altText} width="100%" />
                        </a>
                      </div>
                    ))}
                    <Modal full size="large" open={on} onClose={() => set(false)}>
                      <img src={this.state.image} alt={this.state.altText} width="100%" />
                    </Modal>
                  </React.Fragment>
                )}
              </Toggle>
            </FlexContainer>
          </Grid.Col>
        </Grid>
      </React.Fragment>
    )
  }
}
