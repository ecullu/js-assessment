if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        for(let i = 0; i < str.length; i++){
            if(!isNaN(str[i])){
                return true
                }
            }
        return false
    },

    containsRepeatingLetter : function(str) {
        counterObj = {}
        for(let i = 0; i < str.length; i++){
            if(counterObj[str[i]] === undefined){
                counterObj[str[i]] = 1
            }
            else if (isNaN(str[i])){
                return true
            }
        }
        return false
    },

    endsWithVowel : function(str) {
        let vowels = ["a","e","i","o","u"]
        let lastLetter = str[str.length-1]
        if(vowels.indexOf(lastLetter) >= 0 || vowels.indexOf(lastLetter.toLowerCase()) >= 0){
            return true
        }
        else{
            return false
        }

    },

    captureThreeNumbers : function(str) {
        let connectedNumbers = "" 
        for(let i = 0; i < str.length; i++){
            if(!isNaN(str[i])){
                connectedNumbers += str[i]
                if(connectedNumbers.length === 3){
                    return connectedNumbers
                }
            }
            else{
                connectedNumbers = ""
            }
        }
        return false

    },

    matchesPattern : function(str) {
        let splittedArr = str.split("-")
        let matchedState = true
        if(splittedArr[0].length !== 3 || splittedArr[1].length !== 3 || splittedArr[2].length !== 4){
            return false
        }
        splittedArr.forEach((el)=>{
            for(let i = 0; i < el.length; i++){
                if(isNaN(el[i])){
                    matchedState = false
                }
            }
        })
        return matchedState
    },
    isUSD : function(str) {
        if(str[0] !== "$"){
            return false
        }
        var newStr = str.split("$")
        var amount = newStr[1]
        if(isNaN(amount[0])){
        return false
        }
        if(amount.indexOf("_") >= 0){
            return false
        }
        if(amount.indexOf(".") >= 0){
            var splitByDot = amount.split(".")
            var decimal = splitByDot[1]
            if(decimal.length !== 2){
                return false
            }
            var integer = splitByDot[0]
        }
        else{
            var integer = amount
        }

        
        var splitIntByComma = integer.split(",")
        for(var i = 1; i < splitIntByComma.length; i++){
            if (splitIntByComma[i].length !== 3){
                return false
            }
        }
        return true

    }
  };
});
