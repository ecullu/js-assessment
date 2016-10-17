if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0],arr[1],arr[2])
    },

    speak : function(fn, obj) {
        return fn.call(obj)

    },

    functionFunction : function(str) {
        return (newStr) => str + ", " + newStr
    },

    makeClosures : function(arr, fn) {
        var resultArr = []
        for(let i = 0; i < arr.length; i++){
            var func = function() {
                 return function(){
                     return fn(arr[i])
                 }
            }
            resultArr.push(func())
        }
        return resultArr
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1,str2,str3)
        }
    },

    useArguments : function(...args) {
        var output = args.reduce((prev,cur)=>{ 
            return prev + cur
        }) 
        return output
    },

    callIt : function(fn, ...args) {
        return fn(...args)
    },

    partialUsingArguments : function(fn, ...args) {
        return function(...args2){
            var newArgs = args.concat(args2)
            return fn(...newArgs)
        }
    },

    curryIt : function(fn) {
        return function(arg1){
            return function(arg2){
                return function(arg3){
                    return fn(arg1,arg2,arg3)
                }
            }
        }
    }
  };
});
