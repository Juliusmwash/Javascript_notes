# Readme: Working with the `super` Keyword in JavaScript

In JavaScript, the `super` keyword plays a crucial role in accessing methods and properties of an object's parent or superclass within an object's method. However, there are some important rules and limitations to keep in mind when using `super`. This readme file will explain how to use the `super` keyword correctly.

## Usage Within Object Literals

In the context of object literals, it's important to note that `super` can only be used inside methods defined with the ES6 method syntax. Here's an example that demonstrates this:

```javascript
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
```

In this example, `super` is used effectively within the `method` of the `child` object to access the `prop` property from its parent (`parent` object).

## Incorrect Usage

Using `super` outside of a method defined within a class or an object literal with method syntax will result in a `SyntaxError`. For instance:

```javascript
const obj = {
  __proto__: {
    prop: "foo",
  },
  method: function () {
    console.log(super.prop); // SyntaxError: 'super' keyword unexpected here
  },
};
```

Here, the usage of `super` within the `method` function is incorrect because it's not within the correct context.

## Key Takeaway

To summarize, the `super` keyword is a powerful tool for handling inheritance in JavaScript. It can be used to access parent methods and properties but is restricted to methods defined within classes or object literals with method syntax. Ensure that you use `super` in the appropriate context to harness its full potential for managing inheritance in your JavaScript code.

Remember that understanding how `super` works is fundamental when working with JavaScript inheritance and object-oriented programming.
