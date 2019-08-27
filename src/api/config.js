let configUrl = ''

if (process.env.NODE_ENV === 'development') {
  // configUrl = 'http://192.168.1.13:9999/'
  configUrl = 'https://somsgateway.ksudi.com/'

}

export default configUrl