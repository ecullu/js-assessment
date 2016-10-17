if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.bind(obj)()
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting
    },

    iterate : function(obj) {
    	let arr = []
    	for(let key in obj){
            if(obj.hasOwnProperty(key)){
    		arr.push(key + ": " + obj[key])
            }
    	}
	    return arr
    }
  };
});
