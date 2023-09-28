const obj = {
  method() {return 'Hello world!'},
};

new obj.method(); // TypeError: obj.method is not a constructor
/*
console.log(obj.method());
*/
