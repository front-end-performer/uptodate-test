// Given the array of integers, find out which numbers are odd numbers.
//
// For example if our array is 1,3,5,6,8,2,0,11 the result will be 1,3,5,11

exports.oddIntegers = function (data) {
	//TODO implement me
	let odds = data.filter((n) => n % 2);

	return odds;
};
