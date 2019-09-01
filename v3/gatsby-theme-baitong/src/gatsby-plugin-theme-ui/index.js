export default {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: 'Nunito, sans-serif'
  },
  fontSizes: [14, 30, 60],
  lineHeights: {
    body: 1.4,
    heading: 1.1
  },
  colors: {
    gray: '#333',
    background: '#fff'
  },
  sizes: {
    default: '90vw',
    max: '900px'
  },
  styles: {
    Layout: {
      color: 'gray',
      fontFamily: 'body',
      fontSize: 0,
      lineHeight: 'body'
    },
    Main: {
      margin: '0 auto',
      maxWidth: 'max',
      width: 'default'
    },
    h2: {
      fontSize: 2,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0'
    },
    p: {
      margin: 0
    }
  }
}
