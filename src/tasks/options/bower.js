var path = require('path');

module.exports = {
    install: {
        options: {
            targetDir: '../lib',
            layout: function(type, byComponent, source) {
                //bower task layout:byComponet don't work hack like this
                var source_list = source.split('/');
                var real_path = []
                if (source_list[2] === 'dist') {
                    real_path = source_list.slice(3, -1).join('/')
                } else {
                    real_path = source_list.slice(2, -1).join('/')
                }
                return path.join(byComponent, real_path);
            },
            install: false,
            verbose: false,
            cleanTargetDir: false,
            cleanBowerDir: false,
            bowerOptions: {
                
            }
        }
    }
}