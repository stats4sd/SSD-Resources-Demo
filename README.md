# Stats4sd Resources Sites

For specific information about the site or development please contact c.clarke@stats4sd.org.
general installation information can be found below. If you wish to make a clone then please ensure the site is linked to a new firebase app.

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

    `polymer serve`

    (of if you wish to use live-reload, install browser-sync globally and run custom start function)
    `npm run start`

### Build and deploy

Optional - update version number on stats4sd-home.html

Staging - default config
`npm run deploy`

Production - used only on resources.stats4sd.org (defined in environment/setConfig.js)
`npm run deploy:prod`

### Run web-component-tester tests

    polymer test

**_Note_**
Build process currently has issue when minifying firebase components [see issue #132](https://github.com/stats4sd/Stats4SD-Resources-Site/issues/132)

Current workaround includes additional imports in polymer.json to maintain automatic process, however this should be reviewed at a later date to help minimise file sizes.
Build should be tested via $firebase serve command and if auth still fails files may still need to be copied from bower_components/firebase and bower_components/polymerfire

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

1.  change each element polymer import:
    $<link rel="import" href="../../bower_components/polymer/polymer-element.html">-><link rel="import" href="../polymer/polymer-element.html">
2.  override copy in the existing ssd-elements (bower publish version) folder
3.  change app import to be via bower component versions of ssd-elements
    (note, if running polymer lint will show up as error as paths won't resolve, this is fine and build should still work)

### Dev links

Redux used to store global data:
https://tur-nr.github.io/polymer-redux/docs
