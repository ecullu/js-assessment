if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === item){
                return i
            }
        }
        return -1

    },

    sum : function(arr) {
        return arr.reduce((previous,current) => previous + current)
    },

    remove : function(arr, item) {
         newArr = []
         arr.forEach((el) => {
            if(el !== item){
                newArr.push(el)
            }
         })
         return newArr
    },

    removeWithoutCopy : function(arr, item) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === item){
                arr.splice(i,1)
                i --
            }
        }
        return arr
    },

    append : function(arr, item) {
        arr[arr.length] = item
        return arr
    },

    truncate : function(arr) {
        arr.splice(arr.length-1,1)
        return arr
    },

    prepend : function(arr, item) {
        for(let i = arr.length; i >= 1; i--){
            arr[i] = arr[i-1]
        }
        arr[0] = item
    return arr

    },

    curtail : function(arr) {
        arr.splice(0,1)
        return arr
    },

    concat : function(arr1, arr2) {
        arr2.forEach((item) => { arr1.push(item)})
        return arr1
    },

    insert : function(arr, item, index) {
        for(let i = arr.length; i >= index; i--){
            arr[i] = arr[i-1]
        }
        arr[index] = item
        return arr
    },

    count : function(arr, item) {
        let counter = 0
        arr.forEach((el)=>{
            if(el === item) {counter += 1}
        })
        return counter
    },

    duplicates : function(arr) {
        let arrObj = {}
        let duplicateArr = []
        arr.forEach((el)=> {
            if(arrObj[el] === undefined){
                arrObj[el] = 1
            }
            else{
                if(duplicateArr.indexOf(el) === -1){
                    duplicateArr.push(el)
                }
            }
        })
        return duplicateArr
    },

    square : function(arr) {
        return arr.map((el)=>{
            return el * el
        })
    },

    findAllOccurrences : function(arr, target) {
        let occurenceArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === target){
                occurenceArr.push(i)
            }
        }
        return occurenceArr

    }
  };
});
