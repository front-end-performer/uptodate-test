// One research company wants to build the dashboard where they will be able to see which cities have population
// that is equal or above 90th percentile of all the cities they have information on.
//
// To calculate percentile, follow these steps:
//
// For example we have these seven values: 1,3,7,5,9,5,2
//
// percentile = 90 //90th percentile
// value_count = 7 //number of provided values
//
// index = (percentile / 100) * value_count)
//
// If index is not an integer, round it always to the bigger number.
//
// If you sort the array, index should tell you the starting element of a subarray that is needed. In our example
// the result is array with element 9.

exports.percentile = function (percentile, data) {
	//TODO implement me
	function sortNumber(a, b) {
		return a - b;
	}

	data.sort(sortNumber);

	console.log("data", data);
	// data [1, 2, 3, 5, 5, 7, 9]

	index = (percentile / 100) * (data.length - 1);

	console.log("index", index);
	// index 5.4

	if (Math.floor(index) == index) {
		result = data[index];
		//
	} else {
		//5.4
		i = Math.floor(index);

		console.log("i", i);
		// i 5

		fraction = Math.ceil(index) - i;
		// 6 - 5
		console.log("fraction", fraction);
		// fraction 0.40000000000000036

		console.log("data[i]", data[i]);
		console.log("data[i + 1]", data[i + 1]);
		result = [data[i] + (data[i + 1] - data[i]) * fraction];
		// 7 +   (9 - 7) * 1
	}
	return result;
};
