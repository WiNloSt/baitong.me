import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Grid } from '../../components/Grid'
import { FlexContainer } from '../../components/FlexContainer'
import { Modal } from '../../components/Modal'
import { Toggle } from 'react-powerplug'
import { canUseDOM } from '../../utils'
import { withSiteData } from 'react-static'

const preloadImage = imageSrc => {
  const image = new window.Image()
  image.src = imageSrc
}

const NavBackground = styled.div`
  height: 120px;
  background-color: #ff88a5;
`

const Thumbnail = styled.div`
  img {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`
class Portfolio extends React.Component {
  static propTypes = {
    portfolio: PropTypes.array
  }

  state = {
    image: '',
    altText: ''
  }

  componentDidMount() {
    if (canUseDOM()) {
      this.props.portfolio.forEach(item => preloadImage(item.image))
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
                    {this.props.portfolio.map((item, index) => (
                      <Thumbnail
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
                      </Thumbnail>
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

export default withSiteData(Portfolio)
