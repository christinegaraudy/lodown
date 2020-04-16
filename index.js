'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: returns input value unchanged.
 * 
 * @param {Value} value: input value can be any datatype.
 * 
 * @return {Value}: the value returned will be the same as the input value unaltered
 */
 
 function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 *typeOf: accepts any value and returns its datatype as a string
 * 
 * @param {Value} value: input value can be any datatype
 * 
 * @return {String}: returns the datatype of the input value as a string 
 * 
 */

function typeOf(input) { //accepts any value as parameter
    if(Array.isArray(input) === true){ //if it's an array, return 'array'
        return 'array';
    } else if(input === null) { //if it's null return 'null'
        return 'null';
    } else if(typeof input === 'string'){ //if it's a string, return 'string'
        return 'string';
    } else if(typeof input === 'undefined'){ //if it's undefined return 'undefined'
        return 'undefined';
    } else if(typeof input === 'boolean'){ //if its a boolean, return 'boolean'
        return 'boolean';
    } else if(typeof input === 'number'){ //if it's a number, return 'number'
        return 'number';
    } else if(typeof input === 'function'){ //if it's a function return 'function'
        return 'function';
    } else { //if it's none of the object, it's an object, so return 'object'
        return 'object';
    }
};

module.exports.typeOf = typeOf;

/**
 * first: checks to see if array argument is in fact an array, and if it is, returns 
 * the first <number> of items in that array, based on the number argument. checks for
 * edge cases if the first input is not an array, if the number given is negative, or
 * if the number given is larger than the length of the array
 * 
 * @param {Array}: collection from which the function will return elements
 * @param {Number}: provides the amount of array elements to return
 * 
 * @return: first <number> items of array, or an empty array literal if array is not an
 * array, or the entire array if the number is larger than length of array provided
 */ 
 
function first(array, number) {
    if(Array.isArray(array) === false) {
    //Use Array.isArray() to check if array is an array. If it is not, return
    //an empty array literal.
        return [];
    } else if(typeof number !== 'number') {
    //Use typeof to check if number is a number. If it is not or if number is
    //undefined, return the first element in array.
        return array[0];
    } else if(number < 0) {
    //If number is negative, return an empty array literal.
        return [];
    } else if(number > array.length) {
    //If number is greater than the length of the array, return the whole array.
        return array;
    } else {
    //Else, return the first <number> items of array. Use slice to complete this.
        return array.slice(0, number);
    }
};

module.exports.first = first;

/**
 * first: checks to see if array argument is in fact an array, and if it is, returns 
 * the last <number> of items in that array, based on the number argument. checks for
 * edge cases if the last input is not an array, if the number given is negative, or
 * if the number given is larger than the length of the array
 * 
 * @param {Array}: collection from which the function will return elements
 * @param {Number}: provides the amount of array elements to return
 * 
 * @return: last <number> items of array, or an empty array literal if array is not an
 * array, or the entire array if the number is larger than length of array provided
 */ 
 
function last(array, number){ //accepts an array and a number
    if(Array.isArray(array) === false){ //if it's not an array, return empty array literal
        return [];
    //if it's not null or undefined or a number, return the last element in the input array    
    } else if(number === null || number === undefined || typeof number !== 'number'){ 
        return array[array.length - 1];
    } else if(number > array.length){ //if input number is bigger than length of given array return whole array
        return array;
    } else if(number < 0){ //if input number is negative, return empty array literal
        return [];
    } else { //else, return the indices from the given number to the end of the array
        return array.slice(array.length - number, array.length);
    }
};

module.exports.last = last;

/**
 * indexOf: designed to iterate through an input array looking for an index that matches
 * input value. If a match is found, the loop is exited and the index of first match is returned.
 * If a match is never found, -1 is returned.
 * 
 * @param {Array}: an array, a zero-indexed collection
 * @param {Value}: accepts any value
 * 
 * @return a number which indicates the index wherein the first array item matching the input value 
 * can be found, or the number -1 if no match is found.
 */
 
function indexOf(array, value) {
    //Use a for loop to iterate through array to return the index of the 
    //first occurence of value.
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    //If value is not in array, return -1.
    return -1;
};

module.exports.indexOf = indexOf;

/**
 * contains: accepts an array and a value. returns true if that array contains the given value.
 * returns false if it does not. must use a ternary operator.
 * 
 * @param {Array}: a zero-indexed collection of elements
 * @param {Value}: accepts any value
 * 
 * @return {Boolean}: true or false depending on whether the array contains the value given
 */
 
function contains(array, value) { //accepts an array and a value
    //using ternary operator, return true if array contains value, false if not
    return (array.includes(value)) ? true : false; 
};

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, func){ //accepts a collection and a function
    if(Array.isArray(collection)){ //if the collection is an array
        for(let i = 0; i < collection.length; i++){ //iterate over the array
            //and apply function with arguments of element, index, and collection to every element
            func(collection[i], i, collection); 
        }
    } else if(collection !== null || typeof collection === 'object'){ //if it's an object 
        for(var key in collection){ //iterate over object
            func(collection[key], key, collection); //apply function for each property with arguments value, key, collection
        }
    }

}

module.exports.each = each;

/**
 * unique: takes in an array and removes any duplicate elements, returning a new array
 * with duplicates removed
 * 
 * @param {Array}: the zero-indexed collection from which to remove duplicate elements
 * 
 * @return {Array}: a new array with duplicate elements removed
 * 
 */
 
function unique(array) {
    //create new empty array to push values into
    let newArray = [];
    //iterate over input array
    for(let i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i]) === -1) { //if the current array element passed to indexOf is equal to -1
            newArray.push(array[i]); //push into new array
        }

    }
    return newArray; //return new array
}

module.exports.unique = unique;

/**
 * filter: accepts an array and a function.  applies function to all elements in array.
 * returns an array of only those elements that, when passed to function as arguments, 
 * evaluated to true
 * 
 * @param: {Array}: zero-indexed list over which to iterate and whose elements to
 * apply to function one by one
 * @param: {Function}: to pass array elements to for testing
 * 
 * @return: {Array}: returns an array of those elements which, when passed to function
 * as arguments, evaluated to true
 * 
 */
 
 function filter(array, func){ //accepts an array and a function
    //create an empty array
    var trueArray = [];
    //iterate over the input array
    for(let i = 0; i < array.length; i++) {
        //if the result of passing the current element, its index, and the entire array to the function evaluates to true
        if(func(array[i], i, array) === true){ 
            trueArray.push(array[i]); //push it into result array
        }
    }
    return trueArray; //return result array
};

module.exports.filter = filter;

/**
 * reject: accepts an array and a function. it returns an array of the elements that, 
 * when passed to input function, evaluate to false
 * 
 * @param: {Array}: an array whose elements will be tested by input function
 * @param: {Function}: will test each element in input array
 * 
 * @return: {Array}: returns a new array of the elements 
 */
 
function reject(array, func){ //takes an array and a function
  return filter(array, function(element, index, array){ //uses filter loop over array and to apply function to element, index, and whole array each iteration
    return func(element, index, array) === false; //return an array of those elements that evaluated to false when passed to the input function
  });
}

module.exports.reject = reject;

/**
 * partition: takes an array and tests all of its elements against a given function,
 * then pushes truthy elements into one and falsy into another. returns both as two
 * arrays separated by a comma
 * 
 * @param: {Array}: accepts an input array to test with function
 * @param: {Function}: accepts a function with which to test array elements
 * 
 * @result: {Array}: one array containing two arrays, one with truthy values, the
 * other with falsy values
 * 
 */
 
function partition(array, func){
    //make two empty arrays, one for true values, one for false values
    var truthyArray = [];
    var falsyArray = [];
    //loop over input array
    for(let i = 0; i < array.length; i++) {
        //An array that contains all the values for which <function> returned something falsy
        if(func(array[i], i, array) === false){
            falsyArray.push(array[i]);
        //An array that contains all the values for which <function> returned something truthy
        } else if(func(array[i], i, array) === true){
            truthyArray.push(array[i]);
        }
    }
    //make an empty array into which to push both truthy and falsy arrays
    var fullArray = [];
    fullArray.push(truthyArray, falsyArray); //push em
    return fullArray; //return fullArray
};

module.exports.partition = partition;

/**
 * map: tests whether the input collection is an array or object. if array, pass as arguments
 * to input function each element, its index, and the collection as a whole. if object, 
 * pass as arguments to input function each value, its key, and the whole collection. save the 
 * return value of each function call in a new array and return that array.
 * 
 * @param: {Collection}: either an object or array, a collection of data
 * @param: {Function}: will pass information to each element or value in collection
 * 
 * @result: 
 */
 
 function map(collection, func){
    var aNewArray = [];
    if(Array.isArray(collection)){ //if the collection is an array
        for(let i = 0; i < collection.length; i++){ //iterate over the array
            //and apply function with arguments of element, index, and collection to every element
            var arrayFunc = func(collection[i], i, collection); 
            aNewArray.push(arrayFunc); //push the value of each function call into the new array
        } 
    } else if(collection !== null || typeof collection === 'object'){ //if it's an object 
        for(var key in collection){ //iterate over object
            var objFunc = func(collection[key], key, collection); //apply function for each property with arguments value, key, collection
            aNewArray.push(objFunc); //push the value of each function call into the new array
        }
    }
    return aNewArray; //return the new array
};

module.exports.map = map;

/**
 * pluck: uses map function above to return an array containing the value of 
 * input property for every element in input array
 * 
 * @param: {Array}:
 * @param: {Property}:
 */
 
function pluck(array, property){ //accepts array and property parameters
    //returns map function which accepts an array, and function. function params are element, index and array
    return map(array, function(element, index, array){ //applies function to each element in array
        return element[property]; //returns the value of each elements property in a new array
    });
     
};

module.exports.pluck = pluck;

/**
 * every: takes in a collection, discerns whether the collection is an array or an object, and applies 
 * the given function  to every element or property in the collection.  
 * if every element is true, it returns true.  if any element is false, it returns false.
 * 
 * @param: {Collection}: array or object whose elements or properties to test with input function
 * @param: {Function}: will be applied to every element or property
 * 
 * @return: {Boolean}: true if all elements/properties evaluate to true. false if any element or 
 * property evaluates to false.
 */
 
function every(collection, func){ //takes in a collection and a function
    var bool = true; //make a variable bool, default set to true
    if(Array.isArray(collection)){ //test if collection is array
        if(func == null || func === undefined) { //if array, and no function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the collection
                if(collection[i] === false) { //if collection contains a falsy element
                    bool = false; //change bool to false
                    return bool; //return bool (false)
                }
            }
            return bool; //if no function provided, and no elements evaluate to falsy, return bool as true
        } else { //otherwise, if there is a function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the array function to every element its index, whole collection
                if(func(collection[i], i, collection) === false) { // if one element evaluates to false 
                    bool = false; //change bool to false
                    return bool; //return bool
                }
            }
        }
        return bool; //if no elements evaluate to false, return bool as true
    } else if(collection !== null || typeof collection === 'object'){ //else if the collection is an object
        for(var key in collection){ //iterate over the object and apply function to current value, current key, whole collection on each iteration
            if(func(collection[key], key, collection) === false) { //if one of the elements evaluates to false
                bool = false; //change bool to false
                return bool; //return bool as false
            }                
        }
        return bool; //if no elements evaluate to false, return bool as true
    }
};

module.exports.every = every;

/**
 * some: takes in a collection, discerns whether the collection is an array or an object, and applies 
 * the given function  to every element or property in the collection.  
 * if every element is false, it returns false.  if any element is true, it returns true.
 * 
 * @param: {Collection}: array or object whose elements or properties to test with input function
 * @param: {Function}: will be applied to every element or property
 * 
 * @return: {Boolean}: false if all elements/properties evaluate to false. true if any element or 
 * property evaluates to true.
 */
 
function some(collection, func){ //takes in a collection and a function
    var bool = false; //make a variable bool, default set to false
    if(Array.isArray(collection)){ //test if collection is array
        if(func == null || func === undefined) { //if array, and no function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the collection
                if(collection[i] === true) { //if collection contains a true element
                    bool = true; //change bool to true
                    return bool; //return bool (false)
                }
            }
            return bool; //if no function provided, and no elements evaluate to falsy, return bool as true
        } else { //otherwise, if there is a function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the array function to every element its index, whole collection
                if(func(collection[i], i, collection) === true) { // if one element evaluates to true 
                    bool = true; //change bool to true
                    return bool; //return bool as true
                }
            }
        }
        return bool; //if no elements evaluate to false, return bool as true
    } else if(collection !== null || typeof collection === 'object'){ //else if the collection is an object
        for(var key in collection){ //iterate over the object and apply function to current value, current key, whole collection on each iteration
            if(func(collection[key], key, collection) === true) { //if one of the elements evaluates to true
                bool = true; //change bool to true
                return bool; //return bool as false
            }                
        }
        return bool; //if no elements evaluate to true, return bool as false
    }
};

module.exports.some = some;

/**
* reduce: calls a function for every element in input collection, passing the arguments
* previous result, element, index. On the very first iteration, use seed as the previous result.
* On every iteration after that, use the return value of the previous iteration as the previous
* result for the current one.  If no seed is given, use the first index of the given array for
* the seed. After the last iteration, return the return value of the final function call.
* 
* @param: {Array}: a zero-indexed collection 
* @param: {Function}: a function to apply to every element in input array
* @param: {Value}: seed. any datatype. tells loop where to start and then keeps track of iterations.
* 
* @result: the return value of the final function call
* 
 */
 
function reduce(array, func, seed){
    //call function for every element in array
    if(seed != null && seed !== undefined){
        var previousResult = seed; //on first iteration use seed as "previous result"
        for (var i = 0; i < array.length; i++){
            //on every following iteration use the return value of the last iteration as the previous result
            previousResult = func(previousResult, array[i], i); //pass it the arguments previous result, element, index
        }
    } else if(seed == null || seed === undefined){
         previousResult = array[0];  //if no seed is given use the first element of array as the seed, then continue to the next element
        for (var i = 1; i < array.length; i++){
            previousResult = func(previousResult, array[i], i); //pass it the arguments previous result, element, index
        }
    }
    return previousResult; //after the final iteration, return the return value of the final function call
}

module.exports.reduce = reduce;

/**
 * extend: takes in any number of objects, copies all subsequent objects' data into
 * first object, returns a new object which contains all of the data from every input object.
 * 
 * @param: {Object}: first, target object with which all other object will be combined
 * @param: {Object}: at least one additional object, but will accept any amount of objects 
 * to add to first input object
 * 
 * @result: {Object}: a new object which contains all the data from every input object
 */
 
function extend(object1, object2, ...objects){ //accepts any number of object parameters
    var result = Object.assign(object1, object2, ...objects); //assigns all additional objects' properties to first object
    return result; //return new object, which contains all object properties
}

module.extend.pluck = extend;