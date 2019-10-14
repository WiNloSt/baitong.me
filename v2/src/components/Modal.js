import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import { canUseDOM } from '../utils'

injectGlobal`
  body.modal-open {
    overflow: hidden;
  }
`

const Posed = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

const Dimmer = styled(Posed)`
  top: 0;
  left: 0;
  position: fixed !important;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;

  i {
    color: white;
    position: absolute;
    right: 0;
    cursor: pointer;
    margin-right: 1rem;
    margin-top: 1rem;

    @media only screen and (max-width: 479px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 480px) {
      margin-right: 2rem;
      font-size: 1.5rem;
    }
  }
`
const ScrollingContent = styled.div`
  height: 100%;
  overflow-y: auto;

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`

const ModalContainer = styled.div`
  display: inline-block;
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  max-width: ${props => {
    switch (props.size) {
      case 'large':
        return 1200
      default:
        return 800
    }
  }}px;
  width: calc(100% - 1rem);
  background: white;
  border-radius: 3px;
  overflow: hidden; /* for hiding content on full modal */
  vertical-align: middle;

  > img {
    vertical-align: top;
  }
`

const preventExitOnClicked = e => e.stopPropagation()

export class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(['large'])
  }

  closeOnEscape = e => {
    if (e.key === 'Escape') {
      this.props.onClose && this.props.onClose()
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.closeOnEscape)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape)
  }

  render() {
    if (!canUseDOM()) {
      return null
    }

    const { open, children, onClose } = this.props

    if (open) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return ReactDOM.createPortal(
      <PoseGroup>
        {open ? (
          <Dimmer key="1" onClick={onClose}>
            <i className="fas fa-times" onClick={onClose} />
            <ScrollingContent>
              <ModalContainer size={this.props.size} onClick={preventExitOnClicked}>
                {children}
              </ModalContainer>
            </ScrollingContent>
          </Dimmer>
        ) : null}
      </PoseGroup>,
      document.getElementById('modal-root')
    )
  }
}
