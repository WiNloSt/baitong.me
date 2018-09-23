import React from 'react'

import styled from 'styled-components'
import { Grid } from '../../components/Grid'
import { FlexContainer } from '../../components/FlexContainer'
import { data } from './data'

const NavBackground = styled.div`
  height: 120px;
  background-color: #ff88a5;
`
export default () => (
  <React.Fragment>
    <NavBackground />
    <Grid columns={16}>
      <Grid.Col offset={2} columns={12}>
        <FlexContainer>
          {data.map((item, index) => (
            <div key={index}>
              <a>
                <img src={item.thumbnail} alt={item.altText} width="100%" />
              </a>
            </div>
          ))}
        </FlexContainer>
      </Grid.Col>
    </Grid>
  </React.Fragment>
)
