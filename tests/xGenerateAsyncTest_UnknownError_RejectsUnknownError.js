//xGenerateAsyncTest_UnknownError_RejectsUnknownError.js: Testing logic.

define([
	"promise",
	"xGenerateAsyncTest"
], function(
	promise,
	xGenerateAsyncTest
) {
	return {
		"Async": true,
		"Name":"xGenerateAsyncTest_UnknownError_RejectsUnknownError",
		"Input": {
			"Async": true,
			"Name":"FailingAsyncFunction",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve, reject ) {
					reject({ "Message": "Error" });
				});
			},
			"ExpectedOutput": true,
			"ExceptionTest": false,
			"Debug": false
		},
		"Function": function( Input ) {
			var xResult = {};
			return promise(function( resolve ) {
				xGenerateAsyncTest( Input ).Run().catch(function( Error ) {
					xResult = Error;
				}).finally(function() {
					resolve( xResult );
				});
			});
		},
		"ExpectedOutput": { "Message": "UnknownError" },
		"Comparator": { "Object": true },
		"Debug": false
	};
});
