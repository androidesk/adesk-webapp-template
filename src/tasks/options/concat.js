module.exports = {
  options: {
    separator: ''
  },
  dist: {
    src: [
      'js/**/*.js'
    ],
    dest: '../js/<%= pkg.name %>.js'
  }
}