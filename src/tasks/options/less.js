module.exports = {
    production: {
        options: {
            paths: ["css"],
            compress: true
        },
        files: {
            "../css/<%= pkg.name %>.css": "css/base.less"
        }
    }
}