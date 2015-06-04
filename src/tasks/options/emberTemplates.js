module.exports = {
    compile: {
        options: {
            templateNamespace: 'Handlebars',
            concatenate: true,
            precompile: true,
            templateBasePath: "",
            templateName: function(name) {
                return name.replace('lib/js/templates/', '');
            }
        },
        files: {
            '../js/<%= pkg.name %>-template.js': 'js/templates/**/*.hbs'
        }
    }
}