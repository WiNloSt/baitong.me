import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home'
      },
      {
        is404: true,
        component: 'src/pages/404'
      }
    ]
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
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" />
            <meta name="msapplication-TileColor" content="#ffc0cb" />
            <meta name="theme-color" content="#ffc0cb" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
