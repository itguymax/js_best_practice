'use strict'// will enforce an error Duplicate parameter not allowed in this context
function x(a,b,a){//we have a duplicate param here 
    console.log(a);
};
x(1,2,3);// no error output:3