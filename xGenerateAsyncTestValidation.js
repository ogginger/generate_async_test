//validation.js: Validation rules for input.

define([
	"underscore"
], function(
	_
) {
  return [
	function( Input ) {
		if ( _.has( Input, "Async" ) === false ) {
			throw { "Message": "Error: Input does not contain the Async property." };
		} else if (
			_.has( Input, "Async" ) &&
			Input.Async === false
		) {
			throw { "Message": "Error: Async property is set to false." };
		} else {
			return true;
		}
	}
  ];
});
