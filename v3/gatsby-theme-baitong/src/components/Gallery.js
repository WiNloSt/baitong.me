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
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1)

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
      <Modal open={open} closeModal={closeModal}>
        {selectedItemIndex > -1 && (
          <Img fluid={allContentfulPortfolio.nodes[selectedItemIndex].image.fluid} />
        )}
      </Modal>
      {allContentfulPortfolio.nodes.map((node, index) => {
        return (
          <Grid.Item
            key={index}
            onClick={() => {
              handleClick()
              setSelectedItemIndex(index)
            }}>
            <Img fluid={node.thumbnail.fluid} />
          </Grid.Item>
        )
      })}
    </Grid>
  )
}
