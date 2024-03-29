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
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
              contentType
            }
          }
          image {
            fluid(maxWidth: 1168, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
              contentType
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
          <Image
            image={allContentfulPortfolio.nodes[selectedItemIndex].image}
            alt={allContentfulPortfolio.nodes[selectedItemIndex].altText}
          />
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
            <Image image={node.thumbnail} alt={`${node.altText} thumbnail`} />
          </Grid.Item>
        )
      })}
    </Grid>
  )
}

function Image({ image, alt }) {
  if (image.file.contentType === 'image/svg+xml') {
    return <img style={{ width: '100%' }} src={image.file.url} alt={alt} />
  } else {
    return <Img fluid={fixTallContentfulImageNotLoading(image.fluid)} alt={alt} />
  }
}

function fixTallContentfulImageNotLoading(fluid) {
  const srcSetkeysToModify = ['srcSet', 'srcSetWebp']
  srcSetkeysToModify.forEach((keyToModify) => {
    const srcSetItems = fluid[keyToModify]
      .split(',')
      .map((srcSetItemString) => srcSetItemString.split(' '))

    const newSrcSet = srcSetItems
      .map(([srcSetItem, intrinsicWidth]) =>
        [srcSetItem.replace(/&h=\d+/, ''), intrinsicWidth].join(' ')
      )
      .join(',')

    fluid[keyToModify] = newSrcSet
  })

  return fluid
}
