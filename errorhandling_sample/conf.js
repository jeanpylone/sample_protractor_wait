exports.config = {
  specs: [
    'test.js'
  ],
  onPrepare: function(){
    jasmine.getEnv().catchExceptions(false);
    jasmine.getEnv().throwOnExpectationFailure(false);
  },
  capabilities: {
    browserName: 'chrome',
    name: 'Unnamed Job',
    logName: 'Chrome - English',
    count: 1,
    seleniumAddress: 'http://localhost:4444/wd/hub'
  }
};

