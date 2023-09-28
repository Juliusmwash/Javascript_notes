/*
In JavaScript, the `super` keyword is used to access methods and properties of an object's parent or superclass within an object's method. However, there are some rules and limitations to how `super` can be used.

In the code snippet you provided:
*/


const obj = {
  __proto__: {
    prop: "foo",
  },
  method: function () {
    console.log(super.prop); // SyntaxError: 'super' keyword unexpected here
  },
};



/*
Here's what's happening:

1. You have an object `obj` with a property called `__proto__`. This `__proto__` property points to another object, which is essentially the prototype of `obj`. This is how JavaScript handles inheritance through the prototype chain.

2. Inside the `method` function of `obj`, you're trying to access `super.prop`. However, this usage is incorrect and results in a `SyntaxError`. The reason is that `super` can only be used inside methods defined within class definitions or object literals with method syntax.

To use `super`, you typically need to define a class or an object literal with method syntax (which is introduced using ES6 shorthand notation). Here's an example of how you could use `super` correctly:
*/


const parent = {
  prop: "foo",
};

const child = {
  __proto__: parent,
  method() {
    console.log(super.prop); // This works, and it will log "foo"
  },
};

child.method(); // Call the method to see the output


/*
In this example, `super` is used within the `method` of the `child` object, and it successfully accesses the `prop` property from its parent (`parent` object).

The key takeaway is that `super` is used for inheritance and can only be used inside methods defined within classes or object literals with method syntax, where it refers to the parent object or class prototype. It cannot be used in regular function declarations or object literals with traditional function syntax.*/
