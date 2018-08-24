//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"bIsObjectEqual": "lib/is_object_equal.min",
	"AsyncTest": "lib/async_test.min",
	"log": "lib/log.min",
	"validate": "lib/validate.min"
    },
    exclude: [ "underscore", "rsvp", "promise" ],
    name: "xGenerateAsyncTest",
    out: "generate_async_test.min.js"
})
