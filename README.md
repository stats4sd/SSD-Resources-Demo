# stats4sd


### Setup

##### Prerequisites

Install [polymer-cli](https://www.polymer-project.org/2.0/docs/tools/polymer-cli):

    npm install -g polymer-cli

##### Setup
    # Using CLI
    mkdir stats4sd
    cd stats4sd
    polymer init stats4sd

    # Or cloning direct from GitHub
    git clone https://github.com/Polymer/stats4sd.git
    cd stats4sd
    bower install

### Start the development server

    polymer serve

### Run web-component-tester tests

    polymer test

### Build

**_Note_** 
Build process currently has issue when minifying firebase components [see issue #132](https://github.com/stats4sd/Stats4SD-Resources-Site/issues/132)
To build for live use an unbundled build and copy all firebase bowercomponents manually into build folder (polymerfire folder seems fine which is confusing...)


Build presets provide an easy way to define common build configurations in your `polymer.json` file. There are 2 build presets we put in `polymer.json` file in stats4sd:

**es5-bundled**

- js: {minify: true, compile: true}
- css: {minify: true}
- html: {minify: true}
- bundle: true
- addServiceWorker: true
- addPushManifest: true
- insertPrefetchLinks: true

**es6-unbundled**

- js: {minify: true, compile: false}
- css: {minify: true}
- html: {minify: true}
- bundle: false
- addServiceWorker: true
- addPushManifest: true
- insertPrefetchLinks: true

Run the command to build the presets:

    polymer build

### Test the build

This command serves the `es5-bundled` build version of the app:

    polymer serve build/es5-bundled

This command serves the `es6-unbundled` build version of the app:

    polymer serve build/es6-unbundled

### Preparing SSD-Elements for publishing
Currently ssd-elements exist in 2 formats, simple to import direct into projects and ready to publish and import via bower.
In future if wish to publish need to 
1. change each element polymer import:
$<link rel="import" href="../../bower_components/polymer/polymer-element.html">-><link rel="import" href="../polymer/polymer-element.html">
2. override copy in the existing ssd-elements (bower publish version) folder
3. change app import to be via bower component versions of ssd-elements
(note, if running polymer lint will show up as error as paths won't resolve, this is fine and build should still work)

