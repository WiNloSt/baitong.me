import React, { useState } from 'react'

import { Grid } from '../layouts/Grid'
import { Modal } from './Modal'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export function Gallery() {
  const { allContentfulPortfolio } = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        nodes {
          altText
          title
          thumbnail {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

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
      {allContentfulPortfolio.nodes.map(node => {
        return (
          <Grid.Item onClick={handleClick}>
            <Img fluid={node.thumbnail.fluid} />
          </Grid.Item>
        )
      })}
    </Grid>
  )
}
