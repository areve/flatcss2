const { resolve } = require('path')

module.exports = {
  base: '/flatcss2/',
  build: {
    minify: false, // using cssnano instead because this breaks some inlined svg

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