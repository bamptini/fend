
// Import the js file to test
import { handleSubmit } from "../client/js/formHandler"
//import { postUpdates } from "../client/js/app"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.  
  test("Testing the handleSubmit() function", () => {
         // Define the input for the function, if any, in the form of variables/array
         // Define the expected output, if any, in the form of variables/array
         // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
         // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher

         
         expect(handleSubmit).toBeDefined();
        // expect(postUpdates).toBeDefined();
  })
})

//describe("Testing the submit functionality", () => {
 // test("Testing the handleSubmit() function", () => {
  //    expect(handleClick).toBeDefined();
//  })
//});




/*

import { expect, test } from "@jest/globals";

// Import the js file to test
import { app } from "../client/js/app";

const resultString = require('../client/js/app');

test('Testing result string in not empty.', () =>{
    expect(resultString {value: 'value'}).toBe('object');
});*/