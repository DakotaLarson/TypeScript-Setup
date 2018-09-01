System.register([], function (exports_1, context_1) {
    "use strict";
    var numberRegexp, ZipCodeValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("numberRegexp", numberRegexp = /^[0-9]+$/);
            ZipCodeValidator = class ZipCodeValidator {
                isAcceptable(s) {
                    return s.length === 5 && numberRegexp.test(s);
                }
            };
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    };
});
//# sourceMappingURL=ZipCodeValidator.js.map