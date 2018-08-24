//xGenerateAsyncTest_AsyncOptionFalse_ThrowsErrorAsyncOptionFalse.js: Testing logic.

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
		"Name":"xGenerateAsyncTest_AsyncOptionFalse_ThrowsErrorAsyncOptionFalse",
		"Input": {
			"Async": false,
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
							"Message": "Error: Async property is set to false."
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
