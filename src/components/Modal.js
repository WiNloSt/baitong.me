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
