// use this file if you wish to set an alternate environment configuration (e.g. staging or production)

var currentEnvironment = "production"
console.log('ENVIRONMENT:',currentEnvironment)
window['firebaseConfig']=configurations[currentEnvironment]
