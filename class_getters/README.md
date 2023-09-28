---
# JavaScript Getters README

## Introduction

In JavaScript, getters are special methods that allow you to define how a property should be accessed on an object. They are a powerful feature for controlling access to object properties and can be used to calculate or provide values dynamically.

This README provides an explanation and a demonstration of how getters work in JavaScript.

## Getting Started

To use getters, define an object with a getter method. Here's an example:

OBJECT
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

CLASS
```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe");

```
## Usage

Accessing the `fullName` property from both object and class:

```javascript
console.log(person.fullName); // Output: "John Doe"
```
In this example, `fullName` is a getter method within the `person` object and `Person` class instance(person). When you access `person.fullName`, it doesn't look up a pre-defined value but instead executes the getter method, which dynamically calculates and returns the full name by combining the `firstName` and `lastName` properties.

## Key Points

Here are a few key points to remember about getters:

1. Getter methods are defined using the `get` keyword followed by the property name.

2. They are called just like regular properties but are treated as methods.

3. You can use them to perform calculations, format data, or retrieve data from other sources before returning it.

4. Getters are often used to provide read-only access to properties, as you can't directly assign values to them.

5. Getters can be useful for encapsulating the internal state of an object and controlling how that state is accessed.


## JavaScript Getters and Assignment README

It's important to note that getters are meant for reading and computing values, not for setting them. Let demonstrates this concept with an example.

### Example using object

Consider the following example:

```javascript
const person = {
  _firstName: "John", // Conventionally, use an underscore to indicate a private property
  _lastName: "Doe",
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
};

// Accessing the fullName property
console.log(person.fullName); // Output: "John Doe"

// Try to assign a new value to fullName (this won't work)
person.fullName = "Jane Smith";

// Attempt to change the underlying properties directly (this will work)
person._firstName = "Jane";
person._lastName = "Smith";

// Accessing the updated fullName property
console.log(person.fullName); // Output: "Jane Smith"
```

In this example, we have a `person` object with a `fullName` getter. When we try to assign a new value to `person.fullName`, it has no effect because getters are read-only and do not allow you to directly set a value.

### Key Takeaways

Here are the key takeaways from this example:

- Getters are used to read and compute values based on existing data.

- Assigning values to a getter, such as `person.fullName = "Jane Smith";`, won't change the underlying properties. It's not a valid way to update the data.

- To modify the data that a getter relies on, you should change the underlying properties directly, as demonstrated by updating `person._firstName` and `person._lastName`.


## Clarification section

## Underscore Prefix Convention in JavaScript

### Introduction

The use of an underscore prefix (e.g., `_firstName` and `_lastName`) in variable or property names is a common convention in JavaScript to indicate that those variables or properties are intended to be private or internal to the object. While it's not a strict language rule, it is widely adopted by developers to convey the intended usage of certain properties or variables.

### Why Use the Underscore Prefix?

Here are the key reasons why the underscore prefix convention is used:

1. **Clarity**: The underscore prefix makes the code more readable by signaling to other developers that these properties are intended for internal use within the object and should not be accessed directly.

2. **Preventing Accidental Changes**: Developers conventionally understand that properties with an underscore prefix are not part of the object's public API. This reduces the likelihood of accidentally modifying these properties from outside the object.

3. **Encapsulation**: It promotes encapsulation, a fundamental principle of object-oriented programming. Encapsulation means that an object's internal state should be hidden and only accessed through well-defined methods (getters and setters) to control and safeguard data.

4. **Avoiding Name Conflicts**: It helps prevent naming conflicts with properties or variables that might be added to the object in the future, especially when working on large codebases or collaborating with other developers.

### Flexibility of Convention

It's important to note that the underscore prefix is a convention, not a strict rule enforced by JavaScript itself. It's up to the developer to follow this convention to indicate the intended usage of properties. However, some developers and tools may also use more formal techniques for achieving encapsulation, such as closures or ES6 classes with private fields (denoted by `#` before the property name), to create truly private properties.

### Clarification summary

The underscore prefix convention in JavaScript serves as a valuable tool for communicating the intended usage of properties and variables within objects. While it's not a strict rule, it aids in code clarity, prevents accidental modifications, promotes encapsulation, and reduces the risk of naming conflicts. Understanding and using this convention can enhance code quality and maintainability.

## Conclusion
In summary, getters in JavaScript allow you to customize how object properties are accessed, enabling you to implement computed or dynamically generated properties with ease. However, it's important to understand that they are primarily used for reading and should not be used to assign values directly. To update the data, modify the underlying properties that the getter depends on.

---
