
describe('a', function(){

  it('is ok', function(done){
    expect(0).not.toEqual(1);
    var start = new Date().getTime();
    browser.wait(function() {
      var deferred = protractor.promise.defer();
      var istart = new Date().getTime();
      browser.executeScript(function(){
        window.setTimeout(function(){
          window.__isLoaded = true;
        }, 300);
      });
      browser.executeScript(function(){
        return window.__isLoaded;
      }).then(function (isLoaded) {
          console.log("top", isLoaded, 
            (new Date().getTime()-istart)+'ms',
            (new Date().getTime()-start)+'ms'
          );
          deferred.fulfill(isLoaded);
        });
      return deferred.promise;
    }).then(function(){
      console.log("ok");
      done();
    });
  });
});
