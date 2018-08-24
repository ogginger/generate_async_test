//xGenerateAsyncTest_SimplePassingTest_ResolvesAsyncTestThatPasses.js: Testing logic.

define([
	"xGenerateAsyncTest",
	"promise",
	"log"
], function(
	xGenerateAsyncTest,
	promise,
	log
) {
	return {
		"Async": true,
		"Name":"xGenerateAsyncTest_SimplePassingTest_ResolvesAsyncTestThatPasses",
		"Input": {
			"Async": true,
			"Name": "SimplePassingTest",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve ) {
					resolve( true );
				});	
			},
			"ExpectedOutput": true
		},
		"Function": function( Input ) {
			return promise(function( resolve ) {
				xGenerateAsyncTest( Input ).Run().then(function( TestResult ) {
					resolve( TestResult );
				});
			});
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false		}
	};
});
