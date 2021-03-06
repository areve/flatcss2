const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        forms: resolve(__dirname, 'forms/index.html'),
        tags: resolve(__dirname, 'tags/index.html'),
        tests: resolve(__dirname, 'tests/index.html')
      }
    }
  }
}