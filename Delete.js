'use strict '// will make sure will get a proper error when trying to delete myVar
var obj = { a:10, b:20}, 
    myVAr = 30;

delete obj.a; // delete works only when you delete prop in an object
delete myVAr; // will silently failed an myVar will not get deleted
delete obj; // not possible 

console.log(obj);
console.log(myVAr);

// delete deletes things in an object only