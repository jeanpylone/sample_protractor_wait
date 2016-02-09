
var g_it = global.it;
var Jit = function(desc, fn, timeout){
  var func = function(done){
    try {
      var result = fn(done);
      if (result && result.then){
        result.then(function(){}, function(e){expect(null).toBe(e);});
      }
    } catch(e){
      expect(null).toBe(e);
      done();
    }
  };
  return g_it(desc, func, timeout);
};

describe('a', function(){
  it('will fail', function(done){
    browser.executeAsyncScript(function(done){
      document.body.innerHTML += "<div>"+str+"</div>";
      done();
    }).then(function(){
      done();
    }, function(err){
      expect(null).toBe(err);
      done();
    });
  });
  it('should be not ok', function(done){
    expect(0).toEqual(1);
    done();
  });
  it('will throw an exception', function(done){
    throw "error";
    done();
  });
  it('will throw an async exception', function(done){
    return browser.executeAsyncScript(function(done){
      done();
    }).then(function(){
      throw "error";
      done();
    });
  });
  it('should be ok', function(done){
    expect(0).toEqual(0);
    done();
  });
});
