//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"log": "lib/log.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"AsyncTest": "lib/async_test.min",
	"validate": "lib/validate.min"
    },
    exclude: [ "underscore", "rsvp", "promise", "log", "validate" ],
    name: "xGenerateAsyncTest",
    out: "generate_async_test.min.js"
})
