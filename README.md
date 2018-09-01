# TypeScript-Setup

First time setup of a TypeScript project can be challenging. As a result, I have created this repository so you can drop this code into your repository to get started developing right away instead of fiddling with configuration options until the end of time. 

## Two Configurations

There are two versions that I have created: 'outFile' and 'outDir', corresponding to the TypeScript compilation configuration settings. 

Using 'outFile' will compile all TypeScript modules into a single file. (For HTTP 1.1 webservers)

Using 'outDir' will compile all TypeScript modules into separate files. (For HTTP 2 webservers)

##Installing TypeScript

**Install TypeScript globally with NPM first!** 

Local installation of TypeScript is also possible, however, all compilation commands will need to be run through NPM scripts.

Also consider installing tslint, a linting plugin for TypeScript.

## Bundling Modules

This TypeScript configuration uses SystemJS to bundle all modules together. This means for both Node.JS and Browser projects, a separate script is loaded first that will dynamically load files from the server using Fetch (Modern replacement for XHR). Installation of SystemJS through NPM is required for Node.JS projects. Browser based projects require a script to be loaded into the HTML document.

## Differences between Node.JS and Browser Implementations

Progromatically speaking, there isn't one. The scripts are loaded from different locations (node_modules vs. a hosted script), but the function calls are the same. I placed the Node.JS module loading script in a file called 'Node.JS'. I need a more creative naming convention.

## Difference between 'outFile' and 'outDir'

Besides the obvious difference of how the program is compiled, there are also some configuration differences.

In both cases, the entry (and possibly only) module file is imported, which returns a promise. 

In the case of the 'outFile' configuration, once that promise is resolved, the main module inside the file also needs to be imported. I creatively named that module Main. Again, I need a more creative naming convention.

```javascript
SystemJS.import('/build/build.js').then(() => {
    SystemJS.import('Main');
});
```

In the case of the 'outDir' configuration, there isn't any work to do when the promise is resolved. There is however some configuration overhead that needs to be addressed first. The compiled TypeScript code will attempt to load these modules without file extensions. This is fine when all modules are in the same file, however, this fails when the modules are in different files. Defining default extensions using the below code resolves this issue. Note the parameter 'build' comes from the TypeScript configuration for 'outDir'. It is defined as 'build' in tsconfig.json, and needs to be defined the same here in the SystemJS config. 

'''javascript
System.config({
    packages: {
        build: {
            defaultExtension: 'js'
        }
    } 
});
SystemJS.import('/build/Main.js');
'''

## Closing Remarks

First, if you havent read [this article] (https://david-barreto.com/how-to-use-typescript-with-systemjs/), I highly suggest you do. This article shows if nothing else that there is more than one way to skin a cat (TypeScript compilation facilitated by SystemJS). I wanted JavaScript being sent to the client, not TypeScript, hence why I didn't simply follow this approach. 

Getting this setup also proves challenging when everyone has been asking the same questions since 2015, leading to a load of confusing GitHub and StackOverflow threads that have at times misleading or outdated information. 

I hope this is of some help. If you have more to add or change, create a PR!

Copy the respository.
Install everything.
Profit.


