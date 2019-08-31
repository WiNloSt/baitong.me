import styled from 'styled-components'
import { Link as ReactStaticLink } from 'react-static'

export const Link = styled(ReactStaticLink)`
  &,
  :visited {
    text-decoration: none;
    color: #808080;
    outline: none;
  }

  :hover {
    color: #4d4d4d;
    text-decoration: underline;
  }

  :active {
    color: #333;
  }
`
