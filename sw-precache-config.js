module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/**/*.{js,html,css,png,jpg,gif}',
    '/images/*',
    '/src/**/*.{js,html,css,png,jpg,gif}'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /.*\.(png|jpg|gif|svg)/i,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 200,
          name: 'data-images-cache'
        }
      }
    },
    {
      urlPattern: /\/resources\/.*/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-resources-cache'
        }
      }
    },
    {
      urlPattern: /\/home\/.*/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-resources-cache'
        }
      }
    }
  ]
};
