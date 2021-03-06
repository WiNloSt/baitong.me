import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import * as R from 'ramda'
import axios from 'axios'

const getAssetUrl = assets => imageData => {
  return assets.find(asset => asset.sys.id === imageData.sys.id).fields.file.url
}

const extractPortfolio = contentfulData => {
  return contentfulData.items.map(item => {
    return R.evolve(
      {
        image: getAssetUrl(contentfulData.includes.Asset),
        thumbnail: getAssetUrl(contentfulData.includes.Asset)
      },
      item.fields
    )
  })
}

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home'
      },
      {
        path: '/portfolio',
        component: 'src/pages/Portfolio'
      },
      {
        path: '/v2',
        component: 'src/pages/v2/Home'
      },
      {
        path: '/v2/portfolio',
        component: 'src/pages/v2/Portfolio'
      },
      {
        path: '/v2/about',
        component: 'src/pages/v2/About'
      },
      {
        path: '/v2/contact',
        component: 'src/pages/v2/Contact'
      },
      {
        is404: true,
        component: 'src/pages/v2/404'
      }
    ]
  },
  getSiteData: async () => {
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/ma7q43kx1i9j/environments/master/entries?access_token=${accessToken}&content_type=portfolio&order=sys.createdAt`
    )
    return {
      portfolio: extractPortfolio(response.data)
    }
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props // eslint-disable-line react/prop-types
      return (
        <React.Fragment>
          <Html>
            <Head>
              <title>Baitong.me</title>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc0cb" />
              <link
                href="https://fonts.googleapis.com/css?family=Tajawal|Fira+Sans"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.0.13/css/solid.css"
                integrity="sha384-Rw5qeepMFvJVEZdSo1nDQD5B6wX0m7c5Z/pLNvjkB14W6Yki1hKbSEQaX9ffUbWe"
                crossOrigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.0.13/css/brands.css"
                integrity="sha384-VGCZwiSnlHXYDojsRqeMn3IVvdzTx5JEuHgqZ3bYLCLUBV8rvihHApoA1Aso2TZA"
                crossOrigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.0.13/css/fontawesome.css"
                integrity="sha384-GVa9GOgVQgOk+TNYXu7S/InPTfSDTtBalSgkgqQ7sCik56N9ztlkoTr2f/T44oKV"
                crossOrigin="anonymous"
              />
              <meta name="msapplication-TileColor" content="#ffc0cb" />
              <meta name="theme-color" content="#ffc0cb" />
              {renderMeta.styleTags}
            </Head>
            <Body>
              {children}
              <div id="modal-root" />
            </Body>
          </Html>
        </React.Fragment>
      )
    }
  }
}
