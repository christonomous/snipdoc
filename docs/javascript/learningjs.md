
JavaScript Documentation (https://developer.mozilla.org/en-US/docs/Web/JavaScript)


# data types

## Instance

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type.

### length

For example, every string instance has a property called length that stores the number of characters in it. You can retrieve property information by appending the string with a period and the property name:

`console.log('Hello'.length);`


## console Log
If you want to let you show the output of your JS programm in a console, you can use

`console.log()`

## Strings

Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes `('Hello')` or double quotes `("World!")`. In the example above, `'New York City'` is a string.

## Numbers

Any number, including numbers with decimals: `4, 1516, .002, 23.42`. In the example above, `40.7` is a number.

## Booleans

Either `true` or `false`, with no quotations. In the example above, `true` is a boolean.

## Null

Can only be `null`. It represents the absence of value.

## Libraries

Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.

One such collection contains mathematical methods, aptly named the Math library.

Let's see how you call the .random() method from the Math library:

```console.log(Math.random()); // random number between 0 and 1 ```

In the example above, we called the `.random()` method by appending the library name with a period, the name of the method, and opening `(()` and closing `())` parentheses. This method returns a random number between `0` and `1`. This code prints a random number between 0 and 1.

# build-in methods

While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.

Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:
```
console.log('Hello'.toUpperCase()); // 'HELLO'
console.log('Hey'.startsWith('H')); // true
```
# Comments

As we write JavaScript, we can create comments in our code.

Programs do not evaluate comments when you run them. In other words, they exist just for human readers. Good comments are useful for you and other developers, because they describe what the code does.

There are two types of code comments in JavaScript:

A single line comment will comment out a single line and is denoted with two forward slashes // preceding a line of JavaScript code.

    ```// The first 5 decimals of pi
    console.log('Pi is equal to ' + 3.14159);```

A multi-line comment will comment out multiple lines and is denoted with `/*` to begin the comment, and `*/ to end the comment.`


    ```console.log('All of this code');
    console.log('Is commented out');
    console.log('And will not be executed);```


# Variables

Programmers use variables to write code that is easy to understand and repurpose.

Imagine you're writing a weather app. Your thermometer outside reports the temperature in Celsius, but your goal is to record the temperature in Fahrenheit.

You write a program that takes a temperature of 15 degrees Celsius and calculates the temperature in Fahrenheit.

Once you've done this though, you see the temperature now reads 16 degrees Celsius. To find Fahrenheit again, you'd need to write a whole new program to convert 16 degrees Celsius to Fahrenheit.

That's where variables come in. Variables allow us to assign data to a word and use the word to reference the data. If the data changes (like degrees Celsius) we can replace the variable's value instead of re-writing the program.

In this lesson you will learn about two ways to declare variables: `let` and `const` and `var`.

## Var

The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.

Example: `var a =10;`

> Variable declarations are processed before the execution of the code.
> The scope of a JavaScript variable declared with var is its current execution context.
> The scope of a JavaScript variable declared outside the function is global.

Consider the following code snippet.

```function nodeSimplified(){ var a =10; console.log(a); // output 10 if(true){ var a=20; console.log(a); // output 20 } console.log(a); // output 20 }```

In the above code, you can find, when the variable is updated inside the if loop, that the value of variable "a" updated 20 globally, hence outside the if loop the value persists. It is similar to the Global variable present in other languages. But, be sure to use this functionality with great care because there is the possibility of overriding an existing value.

## let

The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.

Example: `let a =10;`

> The let statement allows you to create a variable with the scope limited to the block on which it is used.
> It is similar to the variable we declare in other languages like Java, .NET, etc.

Consider the following code snippet.

```function nodeSimplified(){ let a =10; console.log(a); // output 10 if(true){ let a=20; console.log(a); // output 20 } console.log(a); // output 10 }```

It is almost the same behavior we see in most language.

```function nodeSimplified(){ let a =10; let a =20; //throws syntax error console.log(a); }```

`Error Message: Uncaught SyntaxError: Identifier 'a' has already been declared.`

However, with `var`, it works fine.

```function nodeSimplified(){ var a =10; var a =20; console.log(a); //output 20 }```

The scope will be well maintained with a let statement and when using an inner function the let statement makes your code clean and clear.

I hope the above examples will help you better understand the var and let commands and if you have any queries please write me in the comment section.

## const

const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.

Example: `const a =10;`

```function nodeSimplified(){ const MY_VARIABLE =10; console.log(MY_VARIABLE); //output 10 }```

As per usual, naming standards dictated that we declare the const variable in capital letters. const a =10 will work the same way as the code given above. Naming standards should be followed to maintain the code for the long run.

## String Interpolation

In previous exercises, we assigned strings to variables. Here, you will learn how to insert the content saved to a variable into a string.

The JavaScript term for inserting the data saved to a variable into a string is string interpolation.

The `+ operator`, known until now as the addition operator, is used to interpolate (insert) a string variable into a string, as follows:

```let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'
```

In the example above, we saved the value `'armadillo'` to the myPet variable. On the second line, the `+ operator` is used to combine three strings: `I own a pet`, the value saved to `myPet`, and .. We log the result of this interpolation to the console as:

`I own a pet armadillo.`


## String Interpolation II

In the newest version of JavaScript (ES6) we can insert variables into strings with ease, by doing two things:

> Instead of using quotes around the string, use backticks (this key is usually located on the top of your keyboard, left of the 1 key).
> Wrap your variable with ${myVariable}, followed by a sentence. No +s necessary.

ES6 string interpolation is easier than the method you used last exercise. With ES6 interpolation we can insert variables directly into our text.

It looks like this:

```let myPet = 'armadillo'
console.log(`I own a pet ${myPet}.`)
// Output: 'I own a pet armadillo.'
```

In the example above, the backticks

`(`) wrap the entire string. The variable `(myPet)` is inserted using `${}`. The resulting string is:`

```I own a pet armadillo.
```


# Control Flow

## if/else Statements

```let needsCoffee = true;
if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}
```

## True and False Values

All variables that have been declared and assigned are truthy unless they contain one of the six values listed below:

   - false
   - 0 and -0
   - "" and '' (empty strings)
   - null
   - undefined
   - NaN (Not a Number)

```let numberOfApples = 0;
if(numberOfApples){
   console.log('Let us eat!'); // This code will not run because 0 is a falsy value
} else {
   console.log('No food left!'); // This code will run
}
```

## True and False Values II

```let isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}
```

## Comparison Operator

> To check if two things equal each other, we write `===` (three = signs in a row).
> To check if two things do not equal each other, we write `!==` (an exclamation with two = signs in a row).

It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.

## else if Statements

```let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```
## Logical Operators


1. To say "both must be true," we use `&&`.
2. To say "either can be true," we use `||`.

For example:
```
if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}
```

## Switch Statements

```let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```

> - The switch keyword initiates the statement and is followed by `( ... )`, which contains the condition that each case will compare to. In the example, the condition is `groceryItem>`.
> - Inside the block, `{ ... }`, there are cases. case is like the else if part of an `if/else if/else statement`. The word following the first case is `'tomato'`. If `groceryItem` equalled `'tomato'`, that case's `console.log()` would run.
> - `groceryItem` equals `'papaya'`, so the first and second case statements are skipped. The third case runs since the case is `'papaya'`, which matches groceryItem's value. This particular program will log Papayas are $1.29.
> - Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code.
> - Without adding `break` at the end of each case, the program will execute the code for all matching cases and the default code as well.
> - This behavior is different from `if/else` conditional statements which execute only one block of code.
> - At the end of each switch statement, there is a default condition. If none of the cases are `true`, then this code will run.



## Ternary Operator

In the previous exercise, we learned shorthand for writing multiple `if/else if/else statements` to make them easier to read. JavaScript also provides a way to shorten simple if/else statements called the ternary operator.

```let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
In the example above, we see a very familiar pattern. See the example below for an equivalent way to express this.

```isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');```

The code in the example above will operate exactly as the code from the previous example. Let's break this example into its parts:

> - `isNightTime ?` — the conditional statement followed by a question mark. This checks if isNightTime is truthy.
> - `console.log ('Turn on the lights!')` — this code will be executed if the condition is truthy.
> - `:` — a colon separates the two different blocks of code that can be executed.
> - `console.log('Turn off the lights!');` — this code will be executed if the condition is falsy

In this example, we checked if the value of a variable was `true` or `false`. The ternary operator can be used for any condition that can be evaluated to true or false, such as those with comparison operators.

```age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');
```

In the example above, the conditional statement is checking whether the value of the variable age is greater than or equal to 16. If so, a message that states the user is old enough to drive will be logged to the console. Otherwise, a message that states the user is not old enough to drive will be logged.

----

# Functions

```let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
```

## Parameters

Parameters

So far our function has not required any input. We can also write functions that accept data. We do this with parameters. Parameters are variables in a function definition that represent data we can input into the function.

```
const multiplyByThirteen = (inputNumber) => {
console.log(inputNumber * 13);
};

multiplyByThirteen(9);
// Output: 117
```

> Let's explore how this function works:

1. We add inputNumber within the parentheses `() =>` of the `multiplyByThirteen` function. `inputNumber` is a parameter.
2. Inside the `multiplyByThirteen()` function, we use `console.log` to print the inputNumber multiplied by `13`.
3. When we call the `multiplyByThirteen()` function on the last line, we set the `inputNumber` parameter. Here, we set it to `9`. Then, inside the function block, `9` is multiplied by `13`, resulting in `117` printing to the console.
4. Note on terminology: `inputNumber` is a parameter, but when we call `multiplyByThirteen(9)`, the `9` is called an argument. In other words, arguments are provided when you call a function, and parameters receive arguments as their value. When we set the value `9` as the argument, we pass a value to the function.

Parameters let us write logic inside functions that are modified when we call the function. This makes functions more flexible.

## Parameters II

If we can set one parameter, can we set two?

We can set as many parameters as we'd like by adding them when we declare the function, separated by commas, like this:

```const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2 ;
  console.log(average);
};


getAverage(365, 27);
// Output: 196
```
1. The getAverage() function has two parameters: numberOne and numberTwo, both entered in the parentheses ().
2. When we call the getAverage() function on the last line, we include two numbers as the arguments, also separated by commas.

> In this case, we are telling the function to assign numberOne the value of 365 and numberTwo the value of 27. We are passing in 365 and > 27 to the getAverage() function.

3. When getAverage() runs, the function knows what numberOne and numberTwo equal since we passed in two arguments when we called the function. Therefore it evaluates (365 + 27) / 2 and stores the result in the average variable. When logged to the console, the value of the average is 196.

By adding multiple parameters, we can build functions that are more flexible. Now the function has two variables that we can define when we call the function.

## Return

Using `console.log()` as the result of a function isn't the best use of a function. The purpose of a function is to take some input, perform some task on that input, then return a result.

To return a result, we can use the return keyword. Take a look at our function from the last exercise, now re-written slightly:

```const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2;
  return average;
}

console.log(getAverage(365, 27));
// Output: 196
```

1. Instead of using `console.log()` inside the `getAverage()` function, we used the `return` keyword. `return` will take the value of the variable and return it.

2. On the last line, we called the `getAverage()` function inside of a `console.log()` statement, which outputted the result of `196`.

3. This code achieved the same output as before, however now our code is better. Why? If we wanted to use the `getAverage()` function in another place in our program, we could without printing the result to the console. Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.

## Return II

In the last exercise, we pointed out that using return makes programs more maintainable and flexible, but how exactly?

When functions return their value, we can use them together and inside one another. If our calculator needed to have a Celsius to Fahrenheit operation, we could write it with two functions like so:

```const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F
```

Take a look at the `getFahrenheit()` function. Inside of its block, we called `multiplyByNineFifths()` and passed it the degrees in celsius. The `multiplyByNineFifths()` function multiplied the celsius by (9/5). Then it returned its value so the `getFahrenheit()` function could continue on to add 32 to it.

Finally, on the last line, we interpolated the function call within a console.log() statement. This works because getFahrenheit() returns its value.

> We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing functions can help take large  and difficult problems and break them into small and manageable problems.

## Function Declarations

Now that we have an understanding of functions in JavaScript, let's take a broader look at the type of functions we'll see. Functions in JavaScript are generally declared as either a function declaration or a function expression.

A function declaration is a function that is bound to an identifier or name.

```function square (number) {
return number * number;
}

console.log(square(5));
// Output: 25.
```

Function declarations require the keyword function, a name, and a function body. You can identify this by the use of `function square()` and the `{}` below. Function declarations do not end in a semi-colon.

Inside the function, using an `if/else` statement, create the following logic:

```If numberOne is greater than numberTwo, return true.
Otherwise, return false.
```
Code:
```function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
};

// Calling the Function with two arguments
isGreaterThan(5,7);
```

## Function Expressions

A function expression is similar to function declaration, with the exception that identifier can be omitted, creating an anonymous function. Function expressions are often stored in a variable. You can identify a function expression by the absence of a function name immediately trailing the function keyword.

```const square = function (number) {
return number * number;
};

console.log(square(5));
// Output: 25.
```

Also note function expressions end with a semi-colon since they are stored in a variable.

In this lesson, we have primarily been using a type of function expression known as an arrow function. Arrow function syntax is a shorter syntax for a function expression. You can identify arrow functions through the use of parentheses and the arrow token () =>.

```const square = (number) => {
return number * number;
};

console.log(square(5));
// Output: 25.
```

It's important to be familiar with the multiple ways of writing functions, since you will come across these in JavaScript code.

## Arrow Functions

JavaScript also provides several ways to refactor arrow function syntax. We'll explore a few of these techniques here, using an example function from a previous exercise.

const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');

We can refactor this function in three ways. The most condensed form of the function is known as concise body.

    Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.
    A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
    A function composed of a sole single-line block does not need brackets.

In other words, the previous code can be refactored like this:

const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');

You'll notice:

    The parentheses around celsius have been removed, since it is a single parameter.
    The return keyword has been removed since the function consists of a single-line block.
    The {} have been removed, again, since the function consists of a single-line block.


---



The old versions of JavaScript had no import, include, or require, so many different approaches to this problem have been developed.

But recent versions of JavaScript have standards like ES6 modules to import modules, although this is not supported yet by most browsers. Many people using modules with browser applications use build and/or transpilation tools to make it practical to use new syntax with features like modules.
ES6 Modules

Note that currently, browser support for ES6 Modules is not particularly great, but it is on its way. According to this StackOverflow answer, they are supported in Chrome 61, Firefox 54(behind the dom.moduleScripts.enabled setting in about:config) and MS Edge 16, with only Safari 10.1 providing support without flags.

Thus, you will currently still need to use build and/or transpilation tools to valid JavaScript that will run in without any requirement for the user to use those browser versions or enable any flags.

Once ES6 Modules are commonplace, here is how you would go about using them:

// module.js
export function hello() {
  return "Hello";
}

// main.js
import {hello} from 'module'; // or './module'
let val = hello(); // val is "Hello";

Node.js require

Node.js is currently using a module.exports/require system. You can use babel to transpile if you want the import syntax.

// mymodule.js
module.exports = {
   hello: function() {
      return "Hello";
   }
}

// server.js
const myModule = require('./mymodule');
let val = myModule.hello(); // val is "Hello"   

There are other ways for JavaScript to include external JavaScript contents in browsers that do not require preprocessing.
AJAX Loading

You could load an additional script with an AJAX call and then use eval to run it. This is the most straightforward way, but it is limited to your domain because of the JavaScript sandbox security model. Using eval also opens the door to bugs, hacks and security issues.
jQuery Loading

The jQuery library provides loading functionality in one line:

$.getScript("my_lovely_script.js", function() {
   alert("Script loaded but not necessarily executed.");
});

Dynamic Script Loading

You could add a script tag with the script URL into the HTML. To avoid the overhead of jQuery, this is an ideal solution.

The script can even reside on a different server. Furthermore, the browser evaluates the code. The <script> tag can be injected into either the web page <head>, or inserted just before the closing </body> tag.

Here is an example of how this could work:

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

This function will add a new <script> tag to end of the head section of the page, where the src attribute is set to the URL which is given to the function as the first parameter.

Both of these solutions are discussed and illustrated in JavaScript Madness: Dynamic Script Loading.
Detecting when the script has been executed

Now, there is a big issue you must know about. Doing that implies that you remotely load the code. Modern web browsers will load the file and keep executing your current script because they load everything asynchronously to improve performance. (This applies to both the jQuery method and the manual dynamic script loading method.)

It means that if you use these tricks directly, you won't be able to use your newly loaded code the next line after you asked it to be loaded, because it will be still loading.

For example: my_lovely_script.js contains MySuperObject:

var js = document.createElement("script");

js.type = "text/javascript";
js.src = jsFilePath;

document.body.appendChild(js);

var s = new MySuperObject();

Error : MySuperObject is undefined

Then you reload the page hitting F5. And it works! Confusing...

So what to do about it ?

Well, you can use the hack the author suggests in the link I gave you. In summary, for people in a hurry, he uses an event to run a callback function when the script is loaded. So you can put all the code using the remote library in the callback function. For example:

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

Then you write the code you want to use AFTER the script is loaded in a lambda function:

var myPrettyCode = function() {
   // Here, do whatever you want
};

Then you run all that:

loadScript("my_lovely_script.js", myPrettyCode);

Note that the script may execute after the DOM has loaded, or before, depending on the browser and whether you included the line script.async = false;. There's a great article on Javascript loading in general which discusses this.
Source Code Merge/Preprocessing

As mentioned at the top of this answer, many developers now use build/transpilation tool(s) like WebPack, Babel, or Gulp in their projects, allowing them to use new syntax and support modules better, combine files, minify, etc.
