export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    body: 'Inter, sans-serif',
  },
  fontSizes: [14, 32, 60],
  breakpoints: ['768px'],
  lineHeights: {
    body: 1.4,
    heading: 1.1,
  },
  colors: {
    white: '#fff',
    gray: '#333',
    background: '#101010',
    lessWhite: '#F4F4F4',
  },
  sizes: {
    default: '90vw',
    max: '900px',
  },
  styles: {
    Layout: {
      color: 'white',
      backgroundColor: 'background',
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 0,
    },
    Container: {
      maxWidth: 'max',
      padding: 0,
    },
    h2: {
      fontSize: 1,
      fontWeight: 500,
      lineHeight: 'heading',
      margin: '1rem 0 0',
    },
    p: {
      margin: 0,
    },
  },
}
