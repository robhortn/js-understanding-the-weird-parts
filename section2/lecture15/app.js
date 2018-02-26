// Since each function get its own execution context, each var has is 'scoped' to that function, getting
// individual values.

function b(){
    var myVar;
    console.log('myVar in b() says: ' + myVar);
    // This will be undefined, the default value the JS engine gives to a var during the creation phase of an execution context.
}

function a(){
    var myVar = 2;
    console.log('myVar in a() says: ' + myVar);
    // This will set mVar to 2 for this execution context for this function.
    b();
}

// For the global execution context here, myVar gets the value of 1 and is never overwritten by
// the other functions who have their own execution contexts.
var myVar = 1;
console.log('myVar says: ' + myVar);
a();

