export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    body: 'Nunito, sans-serif'
  },
  fontSizes: [14, 30, 60],
  breakpoints: ['768px'],
  lineHeights: {
    body: 1.4,
    heading: 1.1
  },
  colors: {
    gray: '#333',
    background: '#fff',
    lessWhite: '#FCFCFC'
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
    Container: {
      maxWidth: 'max',
      padding: 0
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
