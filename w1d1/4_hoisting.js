// programmer version
magic();

var foo = "bar";

function magic(){
    foo = "hello world";
    console.log(foo);
    if (true) {
        var name = 'Kevin';
    }
    var foo;
}

console.log(foo);

// practicing HOISTING
// This is the way javascript views what was written
// REMEMBER:
//      an equal sign is like an anchor
//          const and let are anchors as well (only available in ES6)
//      the keyword "var" allows things to float to the top of their scope
//          const and let are anchors as well
//      functions (not assigned to variables) ALWAYS float to the top of
//          their scope in both ES5 and ES6
//      functions float first, then vars float 2nd

function magic(){
    var name;
    var foo;
    foo = "hello world";
    console.log(foo);  // output: hello world
    if (true) {
        name = 'kevin';
    }
}

var foo;
console.log(foo);  // output: undefined

magic();

foo = "bar";

console.log(foo);   // output:  bar
