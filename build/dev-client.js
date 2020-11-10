/* eslint-disable */
require('eventsource-polyfill')

// docs for hot module: https://github.com/webpack-contrib/webpack-hot-middleware#installation--usage
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
