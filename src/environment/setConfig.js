// use this file if you wish to set an alternate environment configuration (e.g. staging or production)

// set triggers to automatically change branch if desired
var currentEnvironment = "staging";
if (location.host == "resources.stats4sd.org") {
  currentEnvironment = "production";
}
console.log("ENVIRONMENT:", currentEnvironment);
window["firebaseConfig"] = configurations[currentEnvironment];
