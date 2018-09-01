System.register("Validation", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ZipCodeValidator", [], function (exports_2, context_2) {
    "use strict";
    var numberRegexp, ZipCodeValidator;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("numberRegexp", numberRegexp = /^[0-9]+$/);
            ZipCodeValidator = class ZipCodeValidator {
                isAcceptable(s) {
                    return s.length === 5 && numberRegexp.test(s);
                }
            };
            exports_2("ZipCodeValidator", ZipCodeValidator);
        }
    };
});
System.register("Main", ["ZipCodeValidator"], function (exports_3, context_3) {
    "use strict";
    var ZipCodeValidator_1, Startup;
    var __moduleName = context_3 && context_3.id;
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
//# sourceMappingURL=build.js.map