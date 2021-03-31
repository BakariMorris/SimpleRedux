function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
 }
 function sayHi() {
    return "Hi!";
 }
 
 // Invoke the `greeting` function
 greeting();
 
 // [3] Some code here

// 1. Ignore all functions, until it reaches the greeting() function invocation.
// 2. Add the greeting() function to the call stack list.

// Call stack list:
// - greeting

// 3. Execute all lines of code inside the greeting() function.
// 4. Get to the sayHi() function invocation.
// 5. Add the sayHi() function to the call stack list.

// Call stack list:
// - sayHi
// - greeting

// 6. Execute all lines of code inside the sayHi() function, until reaches its end.
// 7. Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
// 8. Delete the sayHi() function from our call stack list.
// Call stack list:

// - greeting

// 9. When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.
// 10. Delete the greeting() function from the call stack list.

// Call stack list:
// EMPTY