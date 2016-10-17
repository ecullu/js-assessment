if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return new Promise(function(resolve,reject){
            resolve(value)
        })
    },

    manipulateRemoteData : function(url) { 
    	var promiseHandler = function (res,rej){
    		var req = new XMLHttpRequest()
	    	req.open('GET', url, true)
	    	req.send()
	    	req.onreadystatechange = function(){
	    		if(req.readyState === 4){
	    			var data = JSON.parse(req.responseText)
	    			var data2 = []
	    			for(var i = 0; i < data.people.length; i++){
	    				data2.push(data.people[i].name)
	    			}
	    			res(data2.sort())
	    		}
	    	} 
    	}
    	return new Promise(promiseHandler)
    }
  };
});
