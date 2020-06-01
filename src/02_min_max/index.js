// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
//
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function (data) {
	//TODO implement me

	var lg = data[0];
	var sm = data[0];

	for (var i = 1; i < data.length; i++) {
		if (data[i] > lg) {
			lg = data[i];
		} else if (data[i] < sm) {
			sm = data[i];
		}
	}

	return { min: sm, max: lg };
};
