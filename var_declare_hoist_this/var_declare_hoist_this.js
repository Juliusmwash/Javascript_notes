/*
 explain

var does not have to be declared.

var is hoisted.

var binds to this.
 */


/*
1. "var does not have to be declared":
   - In JavaScript, when you declare a variable using `var`, you can use it without explicitly declaring it in some cases. This is because `var` variables are function-scoped or globally scoped, meaning they are accessible throughout the entire function or at the global level.
   - Here's an example:
	 */
     function example() {
       x = 10; // 'x' is not explicitly declared using 'var', but it's created as a global variable.
       console.log(x); // Outputs: 10
     }
     example();
     console.log(x); // Outputs: 10
		
		/*
   - In the above code, `x` is not declared using `var`, `let`, or `const`, but it becomes a global variable when assigned a value within the function.*/




/*
2. "var is hoisted":
   - Variables declared with `var` are hoisted in JavaScript. Hoisting means that the variable declarations are moved to the top of their containing function or global scope during the compilation phase, before the code is executed.
   - Here's an example:
	 */

     console.log(a); // Outputs: undefined
     var a = 5;

		/*
   - Even though `a` is used before it's declared, JavaScript doesn't throw an error because the declaration is hoisted to the top.*/



/*
3. "var binds to this":
   - Variables declared with `var` are not bound to the `this` context. Instead, they are either function-scoped or globally scoped, depending on where they are declared.
	 The this keyword inside the sayName function does not refer to the variable name declared outside of the function. Instead, it refers to the global object, which in a web browser environment is usually the window object.

   - Here's an example:
     */
     var name = "John";

     function sayName() {
       console.log(this.name);
     }

     sayName(); // Outputs: undefined
  	
		/*
   - In the above code, `name` is a global variable, but it's not directly bound to the `this` context inside the `sayName` function.*/

/*
It's important to note that `var` has some quirks and limitations, which is why modern JavaScript often prefers using `let` and `const` for variable declarations, as they offer block scoping and have fewer unexpected behaviors.
*/


/*

Yes, you're correct! The primary and most common usage of the `this` keyword in JavaScript is when it's used within object methods to access and manipulate properties and methods of that object. Here's a summary:

- **Proper Usage of `this`**: In object-oriented JavaScript, `this` is used to refer to the current object instance within its methods. It allows you to access and modify the object's properties and call its methods. This is a fundamental concept in object-oriented programming.

  ```javascript
  const person = {
    name: "John",
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  person.sayHello(); // Outputs: Hello, my name is John
  ```

- **Other Usages**: While the primary use is with objects, `this` can also behave differently in various contexts, such as within constructors, event handlers, and classes, where its behavior may vary.

Always remember that the behavior of `this` depends on the context in which it is used, and understanding how it works in different situations is essential for writing effective JavaScript code.


*/
