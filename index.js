'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function() {
	inputString = inputString.split('\n');
	
	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
* Complete the 'miniMaxSum' function below.
*
* The function accepts INTEGER_ARRAY arr as parameter.
*/

function miniMaxSum(arr) {
	// Write your code here
	const sortedArray = arr.sort((a, b) => {return a - b})
	console.log("sorted", sortedArray)
	let min = 0
	let max = 0
	for(let i = 0; i < sortedArray.length - 1; i++ ) {
		min = min + sortedArray[i];
	}
	for(let i = 1; i < sortedArray.length; i++) {
		max = max + sortedArray[i];
	}
	process.stdout.write(min + ' ' + max + '\n')

}

function main() {
	
	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
	
	miniMaxSum(arr);
}
