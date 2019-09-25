import React, { useState } from 'react'

import { Grid } from '../layouts/Grid'
import { Modal } from './Modal'

export function Gallery() {
  const [open, setOpen] = useState(false)
  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleClick() {
    openModal()
  }

  return (
    <Grid>
      <Modal open={open} closeModal={closeModal} />
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
      <Grid.Item onClick={handleClick}></Grid.Item>
    </Grid>
  )
}
