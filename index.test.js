/**
 * @jest-environment node
 */

const Solution = require('./controller/Solution.js');

let solution;

beforeEach(async () => {
    solution = new Solution();
    await solution.retrieveData('https://www.iwillfearnoevil.com/screen/string.txt');
});

afterEach(() => {
    solution = null;
});

test('expect solution._data to have length > 0', () => {
    expect(solution._data.length).not.toBe(0);
});

test('expect heap size to be greater than 0 after a successful retrieval', () => {
    solution.constructHeap();
    expect(solution._minHeap.size()).not.toBe(0);
});

test('expect 3 numbers returned after calling retrieveKLowestNums', () => {
    solution.constructHeap();
    expect(solution.retrieveKLowestNums().length).toBe(3);
})

test('expect 3 numbers returned after calling retrieveKLowestNums to be the smallest', () => {
    solution.constructHeap();
    expect(solution.retrieveKLowestNums()).toEqual([0,2,5]);
});

test('expect k numbers returned when not using the default param', () => {
    solution.constructHeap();
    expect(solution.retrieveKLowestNums(4).length).toBe(4);
});


