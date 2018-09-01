let SystemJS = require('systemjs');

SystemJS.config({
    packages: {
        build: {
            defaultExtension: 'js'
        }
    } 
});
SystemJS.import('./build/Main.js');