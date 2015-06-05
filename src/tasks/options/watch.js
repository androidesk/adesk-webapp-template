module.exports = {
    css: {
        files: 'css/**/*.less',
        tasks: ['less'],
        options: {
            event: ['changed']
        }
    },
    emberApp: {
        files: 'js/**/*.js',
        tasks: ['concat', 'jshint', 'uglify'],
        options: {
            event: ['changed']
        }
    },
    emberTemplates: {
        files: 'js/templates/**/*.hbs',
        tasks: ['emberTemplates']
    }
}
