module.exports = {
    devServer: {
      proxy: {
        '^/': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        // '^/foo': {
        //   target: '<other_url>'
        // }
      }
    }
  }