import styled from 'styled-components'
export const FlexContainer = styled.div`
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
