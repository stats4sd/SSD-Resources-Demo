# SSD-Resources-Demo
#Getting Set up
install required tools and managers
$npm install -g firebase-tools polymer-cli bower

install bower components
$ bower install

start the server. you can see the output at the localhost address given
$ polymer serve --open


#Add a page
1. create a new html doc in the src folder. naming convention is ssd-[name].html
2. copy ssd-viewTemplate contents to new page and update necessary code
3. provide a reference for the menu in ssd-app.html <iron-pages> and <iron-selector> sections

#Prepare for deployment
$ polymer build --add-service-worker

After polymer build, run:
$ vulcanize src/imports-core.html --strip-comments --out-html build/default/src/imports-core.html --inline-scripts --inline-css --strip-exclude bower_components/polymer/polymer.html

(optional. test with $firebase serve)
$firebase serve

Deploy to server
$firebase deploy

#testing
install polylint
$ npm install -g polylint
run from root directory and specify entry
$ polylint --input src/ssd-app.html
(expect undefined warnings for all pages as they are lazy loaded)

#Learn more about the code used

A few good guides to get started:

https://www.polymer-project.org/1.0/start/ 
2 guides, for building element and then app

https://codelabs.developers.google.com/codelabs/polymer-firebase/index.html 
First guide to using firebase for syncing data

https://codelabs.developers.google.com/codelabs/firebase-web/index.html 
Real time chat app using firebase

https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html 
Progressive web app with firebase, poylmer fire and polymer components


More links:

https://console.firebase.google.com 
Backend database and services. Has account linked to ssd@stats4sd.org google account.

https://www.youtube.com/watch?v=fFF2Yup2dMM
Video more generally on google polymer and web apps

https://www.polymer-project.org/1.0/toolbox/ 
https://customelements.io/
https://www.webcomponents.org/ 

https://developers.google.com/drive/v3/web/about-sdk 
https://developers.google.com/identity/protocols/OAuth2ServiceAccount




