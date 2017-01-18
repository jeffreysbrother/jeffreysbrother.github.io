---
title: "Execution Context in JavaScript"
---

Variable and function declarations are stored in memory during the compilation phase (or perhaps more accurately, the *interpretation* phase). This is commonly expressed in a slightly more poetic way by saying that variable and function declarations are "hoisted" to the top of their scope. This can lead to some counterintuitive results.

Before providing examples, let's ensure that our terminology is understood:

```js
var a;            //1. variable declaration
a = 16.4;         //2. variable assignment (or initialization)
var b = 12;       //3. variable declaration and assignment

//4. function declaration
function e(x) {               
  alert("please " + x);
}

//5. anonymous function expression
var add_or_concat = function(d, e) {
  alert(d + e);
};

//5. named function expression
var subtract = function foo(d, e) {
  alert(d - e);
};

//7. IIFE: immediately-invoked function expression
(function() {
  console.log("success!");
})();
```

Precise differences between all of the above aren't crucial here. The only relevant distinction is between function expressions (in general) and function declarations; the former can be named or anonymous, but in all cases they are part of a larger structure (assigned to variable or immediately invoked, for example).

```js
var ff = "outer";
(function(){
  console.log(ff);
})();
```

The code above will print "outer". We have access to the parent scope from within the IIFE. There is nothing particularly surprising about this, just as long as the user has an understanding of scope.

```js
var ff = "outer";
(function(){
  console.log(ff);
  var ff = "inner";    // <----
  console.log(ff);
})();
```

It is usually assumed that the result of the code above will first produce "outer", and then "inner". However, the actual result is "undefined" and then "inner". This is because the declaration of the second variable (but not the assignment) is "hoisted" to the top of its scope. This means that the variable will be undefined when it is first logged, and then contain the value "inner" when it is logged a second time.

```js
//function declaration example
blm();

function blm() {
  console.log("ABC");
}

//function expression example
alm();

var alm = function() {
  console.log(123);
};
```

Since the blm function above is a function *declaration* (as opposed to a function expression), it will be "hoisted" in its entirety to the top of its scope; invoking it this way will log "ABC". However, alm will not produce the same result precisely because it is a function *expression*; the variable declaration of alm will be "hoisted" to the top of its scope, so the interpreter will throw an error since we are, in effect, attempting to invoke an unassigned variable.   
