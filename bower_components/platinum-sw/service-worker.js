(function(global) {
  var VERSION = '1.0';
  
  function deserializeUrlParams(queryString) {
    return new Map(queryString.split('&').map(function(keyValuePair) {
      var splits = keyValuePair.split('=');
      var key = decodeURIComponent(splits[0]);
      var value = decodeURIComponent(splits[1]);
      if (value.indexOf(',') >= 0) {
        value = value.split(',');
      }
  
      return [key, value];
    }));
  }
  
  global.params = deserializeUrlParams(location.search.substring(1));
  
  if (global.params.get('version') !== VERSION) {
    throw 'The registered script is version ' + VERSION +
          ' and cannot be used with <platinum-sw-register> version ' + global.params.get('version');
  }
  
  if (global.params.has('importscript')) {
    var scripts = global.params.get('importscript');
    if (Array.isArray(scripts)) {
      importScripts.apply(null, scripts);
    } else {
      importScripts(scripts);
    }
  }
  
  if (global.params.get('skipWaiting') === 'true' && global.skipWaiting) {
    global.addEventListener('install', function(e) {
      e.waitUntil(global.skipWaiting());
    });
  }
  
  if (global.params.get('clientsClaim') === 'true' && global.clients && global.clients.claim) {
    global.addEventListener('activate', function(e) {
      e.waitUntil(global.clients.claim());
    });
  }
})(self);
