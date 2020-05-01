/***
 * class Solution:
 * Properties:
 * **private
 * data: {Array} - The information retrieved as a result of the retrieveData method
 * minHeap: {Heap} - Generated after the Data property has been populated.  Contains all the valid, distinct Integers from Data
 * smallest: {Array} - The k smallest, distinct integers from the Data property, determined by the retrieveKLowestNums method
 * 
 * 
 * Methods:
 * retrieveData: - enacts a get request to the specified param, and updates the Data property, on error/failure, set Data = []
 * Param: url {String} - the url for the get request
 * Returns: {Boolean} - The result of the get request, successful or not
 * 
 * Private 
 * _constructHeap: for each valid, distinct value from the _data property, add it to the heap
 * Returns: {Boolean} - The constructions was success status
 * 
 * retrieveKLowestNums: - pops the k smallest integers from the minHeap, and sets them in the smallest property
 * Param: k {Int} - the number of results desired to be added to the smallest prop
 * Returns: smallest {Array} - the smallest property contains the k smallest values from the data set 
 */






const { get } = require('axios');
const { minHeap } = require('datastructures-js');


module.exports = class Solution {
    constructor () {
        this._data = [];
        this._minHeap = new minHeap();
        this._smallest = [];
    }

    retrieveData(url) {
        get(url) // request the info
        .then(data => JSON.parse(data)) //parse from json back to original values
        .then(data => {
            //save for later
            this._data = data;
            //save is successful so return true
            return true;
        })
        .catch(error => {
            //something happened with the request or with processing
            console.log(error);
            //operation failed
            return false;
        })
    }


    _constructHeap() {
        //check for data
        if (this._data.length) {
            //create a set for checking uniqueness
            let set = new Set();
            //for each value in the data set, validate it, val - '0' converts the string val to a number, or NaN
            this._data.forEach(val => {
                if (!isNaN(val - '0') && !set.has(val - '0')) {
                   //if it's valid, and unique add it to the heap and the set
                    this._minHeap.push(val - '0');
                    set.add(val - '0');
                }
            })
            //the heap was populated with at some values
            return true;
        } else {
            return false;
        }
    }

    retrieveKLowestNums(k = 3) {
        //reset smallest
        this._smallest = [];
        k = this._minHeap.size() < k ? this._minHeap.size() : k;
        for (let i = 0; i < k; i++) {
            this._smallest.push(this._minHeap.extractRoot());
        }

        return this._smallest;
    }
}

