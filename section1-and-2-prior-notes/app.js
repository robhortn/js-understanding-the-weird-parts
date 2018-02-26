/*

JavaScript - Understanding the Weird Parts

    The Global Environment and the Global Object
    "JS object are all just name/value pairs"

    Whenever code is run, inside of JS, its run inside an Execution Context.  All currently 
    running code is wrapped in an execution context.
    There is a base execution context that always exists.  The Global Execution Context.
    Normalluy, when JS runs, there are multiple execution contexts created within
    a program but the Global Execution Context always exists first.

    When the Global Execution Context (or base execution context) runs, you get two things:
        - Global Object
        - 'this'
    The JS engine provides these for you.

    These two things exist always, even if your JS file is completely blank.  An Execution Context
    is always created AND you get both the Global Object and 'this'.

    'Global', in JS, means "not inside a function"
        Code vars which are not inside a function are global.

    

*/
