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
 * retrieveKLowestNums: - pops the k smallest integers from the minHeap, and sets them in the smallest property
 * Param: k {Int} - the number of results desired to be added to the smallest prop
 * Returns: smallest {Array} - the smallest property contains the k smallest values from the data set 
 */






const { get } = require('axios');
const { minHeap } = require('datastructures-js');