// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
//
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function (data) {
	//TODO implement me
	const arr = [10, 4, 5, 7, 99, 1];

	var lg = arr[0];
	var sm = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > lg) {
			lg = arr[i];
		} else if (arr[i] < sm) {
			sm = arr[i];
		}
	}

	return [{ min: sm, max: lg }];
};
