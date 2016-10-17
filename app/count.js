if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var counter = start
        var increaseCount = function(){
            if(counter <= end){
            	console.log(counter)
                counter += 1
            }
        }
        var timer = setInterval(increaseCount,100)
    	return {
            cancel: function (){
            	clearInterval(timer)
            }
    	}
    }
  };
});