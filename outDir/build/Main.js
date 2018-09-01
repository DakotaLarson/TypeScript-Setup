System.register(["./ZipCodeValidator"], function (exports_1, context_1) {
    "use strict";
    var ZipCodeValidator_1, Startup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ZipCodeValidator_1_1) {
                ZipCodeValidator_1 = ZipCodeValidator_1_1;
            }
        ],
        execute: function () {
            Startup = class Startup {
                static main() {
                    console.log('Hello World');
                    let validator = new ZipCodeValidator_1.ZipCodeValidator();
                    console.log(validator.isAcceptable('12345'));
                    console.log(validator.isAcceptable('incorrect'));
                    return 0;
                }
            };
            Startup.main();
        }
    };
});
//# sourceMappingURL=Main.js.map