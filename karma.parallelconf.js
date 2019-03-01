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
      hostname: 'localhost.lambdatest.com', // hostname, where karma web server will run
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
      browsers: ['Win8.1_chrome_71','Win10_IE_11','HighSierra_Safari_11','Win10_Edge_18'],
      customLaunchers: {
        'Win8.1_chrome_71': {
              base: 'WebDriver',
              config: webdriverConfig,
              browserName: 'chrome',
              platform: 'Windows 8.1',
              version: '71',
              build: 'Jasmine Unit Test Demo',
              name: 'Karma jasmine Sample',
              tunnel: true, // In case karma is running on local machine
              tunnelName:'jasmine', // In case running multiple tunnel
              video: true, // capture video for your test
              visual: true, // capture screenshots on each step
              network: true, // capture network logs for your test
              console: true, // capture browser console logs
              user: process.env.LT_USERNAME,
              accessKey: process.env.LT_ACCESS_KEY,
              pseudoActivityInterval: 15000 // 5000 ms heartbeat
          },
          'Win10_IE_11': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'internet explorer',
            platform: 'Windows 10',
            version: '11',
            build: 'Jasmine Unit Test Demo',
            name: 'Karma jasmine Sample',
            tunnel: true, // In case karma is running on local machine
            tunnelName:'jasmine', // In case running multiple tunnel
            video: true, // capture video for your test
            visual: true, // capture screenshots on each step
            network: true, // capture network logs for your test
            console: true, // capture browser console logs
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
            pseudoActivityInterval: 15000 // 5000 ms heartbeat
        },
        'HighSierra_Safari_11': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'safari',
            platform: 'macOS High Sierra',
            version: '11',
            build: 'Jasmine Unit Test Demo',
            name: 'Karma jasmine Sample',
            tunnel: true, // In case karma is running on local machine
            tunnelName:'jasmine', // In case running multiple tunnel
            video: true, // capture video for your test
            visual: true, // capture screenshots on each step
            network: true, // capture network logs for your test
            console: true, // capture browser console logs
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
            pseudoActivityInterval: 15000 // 5000 ms heartbeat
        },
        'Win10_Edge_18': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'MicrosoftEdge',
            platform: 'Windows 10',
            version: '18',
            build: 'Jasmine Unit Test Demo',
            name: 'Karma jasmine Sample',
            tunnel: true, // In case karma is running on local machine
            tunnelName:'jasmine', // In case running multiple tunnel
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