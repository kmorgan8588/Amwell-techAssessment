const Solution = require('./controller/Solution.js');

const main = async () => {
    //instantiate the solution class
    const solution = new Solution();

    //populate the data
    try {
        let done = await solution.retrieveData('https://www.iwillfearnoevil.com/screen/string.txt');
        if (done) {
            solution.constructHeap();
            return solution.retrieveKLowestNums();
        } else {
            return "There was an error retrieving the data from the specified url";
        }
    }
    catch(error) {
        console.log(error);
        return -1;
    }

}

main().then(console.log);

//export for testing purposes
module.exports = main;
