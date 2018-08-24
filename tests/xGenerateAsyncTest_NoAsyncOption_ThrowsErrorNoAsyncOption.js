//xGenerateAsyncTest_NoAsyncOption_RejectsErrorNoAsyncOption.js: Testing logic.

define([
	"xGenerateAsyncTest",
	"promise",
	"bIsObjectEqual"
], function(
	xGenerateAsyncTest,
	promise,
	bIsObjectEqual
) {
	return {
		"Name":"xGenerateAsyncTest_NoAsyncOption_RejectsErrorNoAsyncOption",
		"Input": {
			"Name": "SimplePassingTest",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve ) {
					resolve( true );
				});
			}
		},
		"Function": function( Input ) {
			var bThrewError = false;
			try {
				xGenerateAsyncTest( Input );
			} catch( Error ) {
				if (
					bIsObjectEqual({
						"Comparator": Error,
						"Comparand": { 
							"Message": "Error: Input does not contain the Async property." 
						}
					})
				) { 
					bThrewError = true; 
				}
			} finally {
				return bThrewError;
			}
		},
		"ExpectedOutput": true
	};
});
