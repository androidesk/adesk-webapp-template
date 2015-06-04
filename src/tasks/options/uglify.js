module.exports = {
    options: {
        // the banner is inserted at the top of the ouput
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %>' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage %>\n' + '* Copyright (c) <%= grunt.template.today("yyyy") %> zhyq0826: <%= pkg.author %> */\n'
    },
    dist: {
        files: {
            '../js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
    }
}