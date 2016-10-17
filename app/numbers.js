if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var binaryVal = num.toString(2)
        var length = binaryVal.length
        return parseInt(binaryVal[length-bit])
    },

    base10: function(str) {
        return parseInt(str,2)
    },

    convertToBinary: function(num) {
        let result = []
        for(let i = 7; i >= 0; i --){
             if(num >= Math.pow(2,i)){
                 result.push('1')
                 num = num - Math.pow(2,i)
            }
            else{
                result.push('0')
            }
        }
        return result.join("")
    },

    multiply: function(a, b) {
        let decimalLength = b.toString().split('.')[1].length
        return  parseFloat((a * b).toFixed(decimalLength))
    }
  };
});

