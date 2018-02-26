// Since each function get its own execution context, each var has is 'scoped' to that function, getting
// individual values.
//
// SCOPE CHAIN
// The links to the outer environment references.  The scope chain in the example below
// goes from b() and a() to the global execution context, which has no outer environment.
// Remember ... b() is declared lexically at the same level as myVar.  Its physically attached
// to the global object.
//

function b(){
    console.log('myVar in b() says: ' + myVar);
    // This has its own execution context BUT it still has access to the global object,
    // created in the global execution context, where myVar is declared.
    // EVERY execution context has a reference it's OUTER environment, which in this case, happens to be
    // the global execution context.    
    // b() does NOT lexically sit inside a().  it is created during the creation phase, alongside
    // a() and therfore b()'s outer environment, lexically speaking, is the global execution context.
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


function c(){
    var myVar2 = 3;
    console.log('myVar2 in c() says: ' + myVar2);
    // This will set mVar2 to 3 for this execution context for this function.
    d();
}

function d(){
    var myVar2;
    e();
    function e(){
        console.log('myVar2 in e() says: ' + myVar2);
       // The scope chain of this takes us to it's outer environment, which in this case is 
       // the fuction d().
    }
}

var myVar2 = 2;
console.log('myVar2 says: ' + myVar2);
c();


