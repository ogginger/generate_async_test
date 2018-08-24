//function.js: Functional Logic.

define([
	"AsyncTest",
	"validate",
	"xGenerateAsyncTestValidation"
], function(
	AsyncTest,
	validate,
	Validation
) {
  return function( Input ) {
	validate({
		"Data": Input,
		"Validation": Validation
	});
	return AsyncTest( Input );
  };
});
