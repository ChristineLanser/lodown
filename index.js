'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take any value and return the value unchanged. 
 * 
 * @param {number, string, boolean, array, object, undefined} param: any value.
 * @return {number, string, boolean, array, object, undefined} returns the value unchanged.
 */

function identity(param) {return param}

module.exports.identity = identity;

//usage
// let animal1 = {name: 'Vannak',
//             animal: 'pangolin'};
//     identity(animal1); // => { name: 'Vannak', animal: 'pangolin' }

/**
*  typeOf: Designed to take any value and return the data type in a string format.
* 
*  @param {string, array, object, undefined, number, boolea, null, function} val: any value.
*  @return {string} returns the type of data as a string.
* 
*/

function typeOf(val) {
   if (typeof val === 'object') {
       if (val === null) {return 'null'};
       if (Array.isArray(val)) {return 'array'};
       return 'object';
   } return typeof val;
};

module.exports.typeOf = typeOf;

//usage
//typeOf(animal1); // => 'object'

//let identityFunc = function(param) {return param};
//typeOf(identityFunc); // => => 'function'


/** 
* first: Designed to return the first items in an array, defined by the number given.
* If the collection is not an array or the num paramater is negative, an empty array 
* is returned. If the num parameter is not a number or is undefined the first item in 
* the collection is returned, by default. If the num paramater is greater than the 
* collection length, the entire array collection is returned.
* 
* @param {Array} collection: The collection over which to iterate.
* @param {Number} num: amount of items to return from array (starting from beginning of array)
* @return {Array} a new collection: with the first <number> items of <array>
*/


function first(collection, num) {
    if (!Array.isArray(collection) || num < 0) {return [] };
    if (Number.isNaN(num) ||  num === undefined || typeof num !== "number") {return collection[0]};
    if (num >= collection.length) {return collection};
    return collection.slice(0, num);
    
};
module.exports.first = first;


//usage

//let distFromSun = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

//first(distFromSun, 4);  // => [ 'Mercury', 'Venus', 'Earth', 'Mars' ]


/** 
* last: Designed to return the last items in an array, defined by the number given. 
* If the collection is not an array or the num paramater is negative, an empty array 
* is returned. If the num parameter is not a number or is undefined the last item in 
* the collection is returned, by default. If the num paramater is greater than the 
* collection length, the entire array collection is returned.
* 
* @param {Array} array: The collection over which to iterate.
* @param {Number} num: amount of items to return from array (at the end of array)
* @return {Array} a new collection: with the last <number> items of <array>
*/

function last(array, num) {
    if (!Array.isArray(array) || num < 0) {return []};
    if (Number.isNaN(num) ||  num === undefined || typeof num !== "number") {return array[array.length - 1];};
    if (num >= array.length) {return array};
    return array.slice(array.length - num);
};
module.exports.last = last;

//usage
//distFromSun = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
//last(distFromSun, 4);  //=> [ 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]


/**
* indexOf: Designed to find the index at which a value first occurs in an array and return that index.
* 
* @param {Array} arr: The collection over which to iterate.
* @param {value} val: The item to look for in an array
* @return {number} the index at which the value first occurs (-1 if not found)
*/

function indexOf(arr, val){
    for (let i = 0; i <= arr.length; i++) {
       if (arr[i] === val){
           return i;
       } 
    } return -1;
}
module.exports.indexOf = indexOf;

//usage
// distFromSun = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
//indexOf(distFromSun, 'Earth'); // => 2


/** 
* contains: Designed to examine an array to see if a given value is within it.
* 
* @param {Array} array: The collection over which to iterate.
* @param {value} value: The item to look for in an array
* @return {Boolean} Retuns true if array conctains value, otherwise returns false
* 
*/

 function contains(array, val) {
     return val === undefined || array.length === 0 ? false 
     :indexOf(array, val) >= 0 ? true 
     :false;
};
module.exports.contains = contains;

//usage
// distFromSun = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
// contains(distFromSun, 'Jupiter'); // => true
// contains(distFromSun, "Pluto"); // => false


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
 
 function each(collection, action) {
    if (typeOf(collection) === 'array'){
      for (let i = 0; i < collection.length; i++) {
        action(collection[i], i, collection);
    } 
  } else {
      for (let key in collection){
        action(collection[key], key, collection);
       }
    }
 }
module.exports.each = each;


//usage
// let multNums = [1, 3, 7, 20]
// let double = function(e, i, a){
//         a[i] = e*2;
//     }
// each(multNums, double);
// console.log(multNums); // each array item is now doubled => [ 2, 6, 14, 40 ]

// distFromSun = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
// let toUpper = function allUpper(e, i, a){
//         a[i] = e.toUpperCase();
//         return a[i];
// };

// each(distFromSun, toUpper);
// console.log(distFromSun); 
// /** returns 
// * [ 'MERCURY',
// *  'VENUS',
// *  'EARTH',
// *  'MARS',
// *  'JUPITER',
// *  'SATURN',
// *  'URANUS',
// *  'NEPTUNE' ]
// */    


/**
 * unique: Designed to remove duplicates from a collection by creating a new collection
 * with only unique values. note: Uses indexOf.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @return {Array} new array of elements from <array> but with duplicates removed
 */
 
function unique(array){
    let newArray = []
    for (let item of array){
        if (indexOf(newArray, item) === -1){
            newArray.push(item);
        }
    } return newArray;
}
module.exports.unique = unique;

//usage
// let ages = [35, 42, 35, 47, 29, 32, 29, 43, 29];
// console.log(unique(ages)); // logs [ 35, 42, 47, 29, 32, 43 ] 

/**
 * filter: Designed to loop over an Array and apply the given condition Function 
 * to each value in the collection to see which values meet the condition. 
 * (uses each as iterator). The condition is a boolean function and when a value 
 * meets the condition that value is pushed into a new array. If a value does not meet
 * the condition it is ignored.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} condition: The Function to be applied to each value in the 
 * collection. 
 * @return {Array} A new array of elements with only elements from original array
 * for which calling <function> (condition) returned true.
 *
 */

 function filter(collection, condition) {
    let newArray = [];   
    let newFun = function(elem, index, array){ // array.forEach(i,el,array) // alt way to write it
      if (typeof condition(elem, index, array) !== 'boolean'){
          return newArray;
      } if (condition(elem, index, array)) {
        newArray.push(elem);
   }
    }
    
   each(collection,newFun); 
    return newArray;
}
module.exports.filter = filter;





/**
 * reject: Designed to loop over an Array and apply the given condtion Function 
 * to each value in the collection to see which values do not meet the condition. If 
 * a value meets the condtion, it is ignored.
 * The condition is a boolean function and when a value fails to meet the condition that 
 * value is pushed into a new array for rejected values.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} condition: The Function to be applied to each value in the 
 * collection. 
 * @return {Array} A new array of elements with only elements from original array
 * for which calling <function> returned false.
 *
 */

function reject(array, condition) {
       let antiFun = function(elem, index, array){
        return !condition(elem, index, array);   
    }
 return filter(array, antiFun);
}
module.exports.reject = reject;

//usage
// newAges =  35, 42, 47, 29, 32, 43
// reject(newAges, function(x){return x%2 === 0}); // => [ 35, 47, 29, 43 ]


/**
 * partition: Designed to loop over an Array and apply the given condition function 
 * to each value in the collection and partition based on results. A new array is returned
 * with two nested arrays, one array containing the filtered values where the condition
 * passed and another array of rejects, with values that did not meet the condition.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} condition: The Function to be applied to each value in the 
 * collection. It is a boolean function and will separate array into truthy and falsey values.
 * @return {Array} A new array containing two nested arrays, one with only elements from original array
 * for which calling <function> returned truthy and another with only elements from original array
 * for which calling <function> returned falsey.
 *
 */
 
 function partition(collection, condition){
    return [filter(collection, condition), reject(collection, condition)];
}
module.exports.partition = partition;

//usage
// let newAges = [35, 42, 47, 29, 32, 43];
// partition(newAges, function(x){return x%2 === 0}); // => [ [ 42, 32 ], [ 35, 47, 29, 43 ] ]


/**
 * map: Designed to loop over an Array and apply the given condition Function 
 * to each value in the collection and create a new collection of the results.
 * 
 * @param {Object or Array} collection: The collection over which to iterate.
 * @param {Function} condition: The Function to be applied to each value in the 
 * collection. 
 * @return {Array} A new array containing the transformed elements from the original array
 * after the function is called on each element.
 *
 */


function map(collection, condition) {
    let newArray = [];   
    let newFun = function(elem, index, array){
      newArray.push(condition(elem, index, array));
    }
    each(collection,newFun); 
    return newArray;
}
module.exports.map = map;

// usage
// newAges = [35, 42, 47, 29, 32, 43];
// map(newAges, function(e){return e*10}); // => [ 350, 420, 470, 290, 320, 430 ]


/**
 * pluck: Designed to loop over an array of objects and find the object property values relating
 * to a given property name for each object and return these values in a new array. 
 * 
 * @param {Array of Objects} collection: The collection over which to iterate.
 * @param {Property} prop: The object property to get values from. 
 * @return {Array} An array of property value(s) of given property.
 */

function pluck(collection, prop){
    let newFun = function(object, index, array){
        return object[prop];
    }
    
    return map(collection, newFun);
}
module.exports.pluck = pluck;

//usage
// let animal = [{name: 'Jimena', type: 'fox' }, {name: 'Vannak', type: 'pangolin'}, 
// {name: 'Marco', type: 'turtle' } ];
// pluck(animal, 'type');  // => [ 'fox', 'pangolin', 'turtle' ]

     

/**
 * every: Designed to loop over a collection in an Array and tests if all
 * elements pass a condition. The condition is implemented by a provided function and 
 * returns a Boolean value. If the function is not defined then the condition defaults 
 * to test if the value is truthy. It is important to remember that a method returns 
 * true for any condition put on an empty array. In some editors is may be possible that 
 * every() does not execute the function for array elements without values. Every() 
 * does not change the original array.
 * @param {Array} coll: A collection to test functon with condition on.
 * @param {Callback Function} func: The function to be applied to each value in the 
 * collection. The callback function takes three parameters.
 * @Return {Boolean} True of False is returned
 **/

function every(coll, func) {
   if(Array.isArray(coll)) {
       if(func === undefined) {
           for(let i = 0; i < coll.length; i++) {
               if(!coll[i]) {
                   return false;
            }
        }
    } else {
           for(let i = 0; i < coll.length; i++) {
               if(func(coll[i], i, coll) === false) {
                   return false;
                   }
            }
        }
   }
   if(func === undefined) {
       for(let key in coll) {
           if(!coll[key]) {
               return false;
           }
       }
   } else {
       for(let key in coll) {
           if(func(coll[key], key, coll) === false) {
               return false;
           }
       }
   }
   return true;
}

module.exports.every = every;

// usage

// every([1,2,5], function(e){return e % 2 === 0}) //=> false
// every([2,4,6], function(e){return e % 2 === 0}) //=> true


// var survey = [
//   { name: "Mauricio", answer: "Yes"},
//   { name: "Valentin0", answer: "Yes"},
//   { name: "Jimena", answer: "Yes"},
//   { name: "Martin", answer: "No"}
// ];

// function isSameAnswer(el, index, arr) {
//   if (index === 0){
//     return true;
//   } else {
//     return false);
//   }
// }

// console.log(survey.every(isSameAnswer));
// returns false because there is one 'No'



/**
 * some: Designed to loop over a collection in an Array and test if any 
 * (at least one) element passes a condition. The condition is implemented by a 
 * provided function and returns a Boolean value. It is important to remember that a method returns 
 * false for any condition put on an empty array. Some function does not change the original array.
 * If the function is not defined then the condition defaults to test if the value is truthy.
 * @param {Array} coll: A collection to test functon with condition on.
 * @param {Function} func: The function to be applied to each value in the 
 * collection. It is a boolean function.
 * @Return {Boolean} True of False is returned
 **/

function some(coll, func) {
   if(Array.isArray(coll)) {
       if(func === undefined) {
           for(let i = 0; i < coll.length; i++) {
               if(coll[i]) {
                   return true;
            }
        }
    } else {
           for(let i = 0; i < coll.length; i++) {
               if(func(coll[i], i, coll) === true) {
                   return true;
                   }
            }
        }
   }
   if(func === undefined) {
       for(let key in coll) {
           if(coll[key]) {
               return true;
           }
       }
   } else {
       for(let key in coll) {
           if(func(coll[key], key, coll) === true) {
               return true;
           }
       }
   }
   return false;
}

module.exports.some = some;

//usage
// some([1,3,5], function(e){return e % 2 === 0}) // => false
// some([1,2,3], function(e){return e % 2 === 0}) // => true

/**
 * reduce: Designed to loop through an array and execute a provided function 
 * for each value (from left-to-right). It reduces the array to a single value, storing
 * each result after the function is applied in an accumulator.
 * @param {Array} arr: A collection of values to be reduced 
 * @param {Callback Function} func: The function to be applied to each value in the 
 * collection. The callback function takes three parameters.                                    
 * @param {initial value or seed} seed: Optional argument that can be used as current or starting value 
 * before values are reduced. (if not provided, the first value in the array will be the current)
 * @return: singlue value which is the accumulated result from the last call of the 
 * callback function
*/

function reduce(arr, func, seed) {
   let res;
   let newArr = [...arr];
   if(seed === undefined) {
       res = arr[0];
       newArr = newArr.slice(1);
       each(newArr, function(element, index, array) {
       res = func(res, element, index + 1);
   });
   } else {
       res = seed;
       each(newArr, function(element, index, array) {
       res = func(res, element, index);
   });
   }
   return res;
}

module.exports.reduce = reduce


//usage
//usage
// let array1 = [1, 2, 3, 4];
// function myFunc(total, num) {
//   return total + num;
// }
// reduce(array1, myFunc); // => 10   (no seed)
// reduce(array1, myFunc, 10); // => 20  (seed of 10)


/**
 * extend: Start with one object and copy properties from second object or more 
 * into the first object.
 * @param {Object} obj1: The collection which to update and add other object(s) to.
 * @param {Object(s)} objArgs: The collection(s) which to update first object, and 
 * add to first object.
 */

function extend(obj1, ...objArgs) {
   let eachFunc = function(element, index, array) {
       each(element, function(value, key, obj) {
           obj1[key] = value;
       })
   }
   each(objArgs, eachFunc);
   return obj1;
}

module.exports.extend = extend;

//usage
//let animalObj = {name: 'Jimena'};

//extend(animalObj, {name: 'Marxi'}, {type: 'coyote'}, {country: 'Mexico'});
//=> { name: 'Marxi', type: 'coyote', country: 'Mexico' }