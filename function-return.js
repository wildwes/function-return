// Functions can return a value that we can capture
// Write a function that takes a string of a dog breed as an argument (like 'border collie')

// Have the function return "my favorite dog breed is" plus the passed in string. 
// If no argument is passed to the function, return "I like cats".

// Execute the function in a way that captures the returned value in a variable.

// Console.log the string "When it comes to pets," plus the returned value of the function.



function petFunction(dog) {

    if (dog) {
        console.log(`"my favorite dog breed is ${dog}"`)
    } else {
        console.log("I like cats!")
    }
}

// called(invoked) the function
petFunction("Siberian Husky");
petFunction("Australian shepherd");
petFunction();
petFunction("German Shepherd")
// When you execute the function, you must give it data to work with