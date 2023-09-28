---
# JavaScript Getters README

## Introduction

In JavaScript, getters are special methods that allow you to define how a property should be accessed on an object. They are a powerful feature for controlling access to object properties and can be used to calculate or provide values dynamically.

This README provides an explanation and a demonstration of how getters work in JavaScript.

## Getting Started

To use getters, define an object with a getter method. Here's an example:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    // This function is the getter for fullName
    return `${this.firstName} ${this.lastName}`;
  }
};
```

## Usage

Accessing the `fullName` property:

```javascript
console.log(person.fullName); // Output: "John Doe"
```

In this example, `fullName` is a getter method within the `person` object. When you access `person.fullName`, it doesn't look up a pre-defined value but instead executes the getter method, which dynamically calculates and returns the full name by combining the `firstName` and `lastName` properties.

## Key Points

Here are a few key points to remember about getters:

1. Getter methods are defined using the `get` keyword followed by the property name.

2. They are called just like regular properties but are treated as methods.

3. You can use them to perform calculations, format data, or retrieve data from other sources before returning it.

4. Getters are often used to provide read-only access to properties, as you can't directly assign values to them.

5. Getters can be useful for encapsulating the internal state of an object and controlling how that state is accessed.

## Conclusion

In summary, getters in JavaScript allow you to customize how object properties are accessed, enabling you to implement computed or dynamically generated properties with ease.

---
