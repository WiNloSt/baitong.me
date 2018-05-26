import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import classNames from 'classnames'

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
    size: PropTypes.oneOf(['large']),
    full: PropTypes.bool
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
            <i
              className="white absolute right-0 fas fa-times pointer mr3 mt3 mr5-l mt4-l"
              onClick={onClose}
            />
            <ScrollingContent>
              <ModalContainer
                size={this.props.size}
                className={classNames('mt5 mb3 mv3-l', { 'pv3 ph4': !this.props.full })}
                onClick={preventExitOnClicked}>
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
