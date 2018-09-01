let SystemJS = require('systemjs');

SystemJS.import('./build/build.js').then(() => {
    SystemJS.import('Main');
});