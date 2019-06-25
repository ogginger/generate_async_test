//test_xGenerateAsyncTest.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "xGenerateAsyncTest",
  "tests/xGenerateAsyncTest_SimplePassingTest_ResolvesAsyncTestThatPasses",
  "tests/xGenerateAsyncTest_NoAsyncOption_ThrowsErrorNoAsyncOption",
  "tests/xGenerateAsyncTest_AsyncOptionFalse_ThrowsErrorAsyncOptionFalse",
  "tests/xGenerateAsyncTest_UnknownError_RejectsUnknownError"
], function(
  TestSuite,
  log,
  xGenerateAsyncTest,
  xGenerateAsyncTest_SimplePassingTest_ResolvesAsyncTestThatPasses,
  xGenerateAsyncTest_NoAsyncOption_ThrowsErrorNoAsyncOption,
  xGenerateAsyncTest_AsyncOptionFalse_ThrowsErrorAsyncOptionFalse,
  xGenerateAsyncTest_UnknownError_RejectsUnknownError
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xGenerateAsyncTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xGenerateAsyncTest" );
	xTestSuite.add( xGenerateAsyncTest_SimplePassingTest_ResolvesAsyncTestThatPasses );
	xTestSuite.add( xGenerateAsyncTest_NoAsyncOption_ThrowsErrorNoAsyncOption );
	xTestSuite.add( xGenerateAsyncTest_AsyncOptionFalse_ThrowsErrorAsyncOptionFalse );
	xTestSuite.add( xGenerateAsyncTest_UnknownError_RejectsUnknownError );
      xTestSuite.test();
    }
  });
});
