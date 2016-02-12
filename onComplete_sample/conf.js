exports.config = {
  specs: [
    'test.js'
  ],

  capabilities: {
    browserName: 'chrome',
    name: 'Unnamed Job',
    logName: 'Chrome - English',
    count: 1,
    seleniumAddress: 'http://localhost:4444/wd/hub'
  },
  onComplete:function(){
    console.log("soon done");

    var deferred = protractor.promise.defer();

    setInterval(function(){
      console.log("top");
    },2000);

    setTimeout(function(){
    	deferred.fulfill();
    },15000);

    return deferred.promise;

  }  
};

