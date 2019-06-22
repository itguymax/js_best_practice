var obj = {};
Object.defineProperty(obj, 'readOnly',{
    enumerable:false,
    configurable:false,
    writable: false,
    value: "This var is read only"
});

console.log( obj.readOnly);