// Karma configuration
// Generated on Mon Jun 30 2014 19:35:20 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // angular source    
      'public/client/assets/libs/angular/angular.js',
      'public/client/assets/libs/angular-ui-router/release/angular-ui-router.min.js',     
      'public/client/assets/libs/angular-mocks/angular-mocks.js',
      'public/client/assets/libs1/xml2json.js',

      'public/client/assets/libs/angular-animate/angular-animate.min.js',
      'public/client/assets/libs1/ui-bootstrap-tpls-1.3.3.min.js',
      'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDH6FkOgBmJMc6u886ee0baaIlPgg_CiN0',

      // our app code
      'public/client/app/**/*.js',

      // our spec files
      'node_modules/expect.js/index.js',
      'test/app.moduleTest.js'
    ],
  
    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
