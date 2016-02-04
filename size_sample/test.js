
describe('a', function(){
  var i=0, j=0, a="a", str = [];
  for(;i<8;i++){
(function(i, a){
    it('sings about '+i+' bottles', function(done){
      browser.executeAsyncScript(function(str, done){
	window.__str = str;
        document.body.innerHTML += "<div>"+str+"</div>";
	done();
      },a).then(function(){
      	done();
      });
    });
  })(i, a);
    str.length = 0;
    for(j=0;j<10;j++){
      str.push(a);
    }
    a=str.join("");
  }
});
