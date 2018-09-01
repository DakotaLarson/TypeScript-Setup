import { ZipCodeValidator } from "./ZipCodeValidator";

class Startup {
    public static main(): number {
        console.log('Hello World');
        let validator: ZipCodeValidator = new ZipCodeValidator();
        console.log(validator.isAcceptable('12345'));
        console.log(validator.isAcceptable('incorrect'));
        return 0;
    }
}

Startup.main();