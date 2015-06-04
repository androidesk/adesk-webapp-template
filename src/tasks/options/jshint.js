module.exports = {
    all: [
        'Gruntfile.js',
        'js/*/*.js'
    ],
    options: {
        asi: true,
        curly: false,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
            jQuery: true
        }
    }
}