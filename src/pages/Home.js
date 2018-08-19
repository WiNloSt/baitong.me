import React from 'react'
import { Redirect } from 'react-static'
import RenderAfterMount from '../components/RenderAfterMount'

export default () => (
  <RenderAfterMount>
    <Redirect to="/v2" />
  </RenderAfterMount>
)
