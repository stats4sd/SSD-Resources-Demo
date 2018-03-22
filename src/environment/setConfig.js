// use this file if you wish to set an alternate environment configuration (e.g. staging or production)

// set master branch to production
var currentEnvironment = "staging"
console.log('ENVIRONMENT:',currentEnvironment)
window['firebaseConfig']=configurations[currentEnvironment]
