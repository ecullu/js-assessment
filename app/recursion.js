if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var fileArr = []        
        var recursive = function(input, dir){
            var files = input.files
            for(let i = 0; i < files.length; i++){
                
                if(typeof files[i] === 'string'){
                    var tempArr = fileArr.push(files[i])

                }
                if(typeof files[i] === 'object'){
                        var newData = files[i]
                         recursive(newData)
                }
            }
        }
        if(dirName !== undefined){
            for(let i = 0; i < data.files.length; i++){
                if(data.files[i].dir === dirName){
                    recursive(data.files[i])
                }
            }
        }
        else{
        recursive(data)  
        }
        return fileArr
    },

    permute: function(arr) {

    }
  };
});
