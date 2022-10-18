// this is to make sure we are not missing any variables from .env

if (!process.env.REACT_APP_ENV!) {
  throw new Error('REACT_APP_ENV required from env')
}

const config = {
  appUrl: process.env.REACT_APP_ENV.includes('development')
    ? 'http://localhost:3000'
    : 'https://test-widget123.netlify.app/',
}

export { config }
