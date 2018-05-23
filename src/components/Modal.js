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

const ModalContainer = styled(Posed)`
  top: 0;
  left: 0;
  position: fixed !important;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`

export const Modal = ({ open, children, onClose }) => {
  if (!canUseDOM()) {
    return null
  }

  if (open) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }

  return ReactDOM.createPortal(
    <PoseGroup>
      {open ? (
        <ModalContainer key="1" onClick={onClose}>
          <button className="pointer fr mr3 mt3 mr5-l mt4-l" onClick={onClose}>
            X
          </button>
          {children}
        </ModalContainer>
      ) : null}
    </PoseGroup>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func
}

const ModalHeaderContainer = styled.div`
  max-width: 800px;
  background: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
`

const ModalHeader = ({ children }) => (
  <ModalHeaderContainer className="ml2 mr2 mt5 mt3-l ml-auto-l mr-auto-l">
    {children}
  </ModalHeaderContainer>
)

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired
}

Modal.Header = ModalHeader
