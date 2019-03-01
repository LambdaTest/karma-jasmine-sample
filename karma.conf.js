var fs = require('fs');

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {

  // Lambdatest grid hostname and port
  var webdriverConfig = {
      hostname: 'hub.lambdatest.com',
      port: 80
  }

  config.set({
      hostname: 'localhost', // hostname, where karma web server will run
      port: 9876,
      basePath: './',
      frameworks: ['jasmine'],
      plugins: [
          'karma-jasmine',
          'karma-webdriver-launcher',
          'karma-*',
          'karma-mocha-reporter'
      ],
      client: {
          clearContext: false
      },

      preprocessors: {
      },
      files: [
        'test/*.js',
        'src/*.js'
      ],
     
      captureTimeout: 600000,
      retryLimit: 1,
      browserDisconnectTimeout: 90000,
      browserDisconnectTolerance: 1,
      browserNoActivityTimeout: 90000,
      reporters: ['mocha'],
      colors: true,
      concurrency: 1,
      logLevel: config.LOG_DEBUG,
      browsers: ['chrome'],
      customLaunchers: {
          chrome: {
              base: 'WebDriver',
              config: webdriverConfig,
              browserName: 'chrome',
              platform: 'windows 10',
              version: '71.0',
              build: 'Jasmine Unit Test',
              name: 'Karma Jasmine Sample',
              tunnel: true, // In case karma is running on local machine
//              tunnelName:'jasmine', // In case running multiple tunnel
              video: true, // capture video for your test
              visual: true, // capture screenshots on each step
              network: true, // capture network logs for your test
              console: true, // capture browser console logs
              user: process.env.LT_USERNAME,
              accessKey: process.env.LT_ACCESS_KEY,
              pseudoActivityInterval: 15000 // 5000 ms heartbeat
          }
      },
      singleRun: true,
      autoWatch: true
  });
};
