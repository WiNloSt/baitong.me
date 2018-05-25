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
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 3px;
  padding: 1rem 2rem;
  vertical-align: middle;
`

const preventExitOnClicked = e => e.stopPropagation()

export class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func
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
              <ModalContainer className="ml2 mr2 mv5 mv3-l" onClick={preventExitOnClicked}>
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
