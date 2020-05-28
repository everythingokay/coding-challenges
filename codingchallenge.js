// WEEK 2 - 02/11/20

// 1. Write a function that has two parameters (arguments).
// The function should subtract the first argument from
// the second argument. If the result is a positive number
// print the number + "this is a positive number"; if not,
// print "this is a negative number"

//function subtractFunction(x,y) {

//    var subtract = x-y;

//    if (subtract > 0) {
//        console.log(subtract + " This is a positive number.")
//    }
//    else {
//        console.log("This is a negative number.")
//    }
//}

//subtractFunction(6, 6)


// 2. Write a function that prompts the user for a number;
// if the number is smaller than 0 print "this number is
// smaller than 0"; if the number is 0 print " the number
// you inserted is zero"; if the number is bigger than 0 then:
// if the number is bigger than 100 print " this is bigger
// than 100"; if the number is smaller than 100 print "it is 
// smaller than 100"; if it is 100 print " it is 100"

// function numbers() {

//     var number = prompt("Choose a number.")

//     if(number < 0) {
//     console.log("This number is smaller than 0.")
//     } else if(number == 0) {
//     console.log("This number is 0.")
//     } else(number > 0) { 
//         if(number > 100) {
//             console.log("This number is bigger than 100.");
//         } else if(number < 100) {
//             console.log("This number is smaller than 100.");
//         } else(number == 100) {
//             console.log("This number is 100.")
//         }
//     }

// }



// WEEK 3 - 02/13/20

//1.  Create a script with two variables assigned
// to two numbers. Add them together and output the 
// result to the console

// var a = 5
// var b = 3

// console.log(a + b)


//2. Try to add two strings together and output
// the result to an alert (concatinate);

// var first = "Mary had a "
// var last = "little lamb."

// alert(first + last)


//3. Create an object that holds information about you.
// Include firstName, lastName, birthday and an array of 
// interests. Print each property out to the console.

//var object = {
//    firstName: "Alison",
//    lastName: "Feldish",
//    birthday: 08161987,
//    hobbies: ["reading", "gardening", "cooking", "yoga"]
//}

// console.log(object.firstName)
// console.log(object.lastName)
// console.log(object.birthday)
// console.log(object.hobbies)


//4. Write a program that checks if a variable
// is less than 100. If it is, alert the user that
// their variable is less than 100. If it is not,
// let the user know what the variable was and that
// it was greater than 100.

// function howHigh(x) {

//     if(x > 100) {
//         console.log(x + " is greater than 100")
//     } else if(x < 100) {
//         console.log("Your variable is less than 100")
//     } else {
//         console.log("Your variable is 100")
//     }
// }


//5. Declare a function that takes a name as an
// argument and tells the user what name they’ve 
// entered, try invoking it after it has been declared

// function naming(name) {
//     console.log("The name you've entered is " + name + ".")
// }


//6. Declare a function that takes no arguments but
// prints something to the console, try invoking it
// after it has been declared

// function whatever() {
//    console.log("It doesn't matter.")
// }


//7. Write a function that takes a number as an input
// from the user and checks if this number is even or odd;

// function evenOrOdd(number) {

//     if(number % 2 == 0) {
//         console.log("The number is even.")
//     }
//     else if(number % 2 !== 0) {
//         console.log("The number is odd.")
//     }
// }


//8.  Declare a function that, depending upon which virtual
// “door” was entered, tells the user they’ve received a 
// different “prize” in an alert. Try running it after it has 
// been declared a few times with each door option

// function doors() {

//     var answer = prompt("Door 1 or Door 2?")

//     if(answer == "Door 1") {
//         alert("One million dollars!")
//     }
//     else if(answer == "Door 2") {
//         alert("Sorry, there is nothing here.")
//     }
//     else {
//         alert("Please choose again.")
//     }
// }

//>>>
//function doors (door){
//    if(door == 1) {
//        console.log("You win.")
//    } else if(door == 2) {
//        console.log("You win more.")
//    } else {
//       console.log("You lose.")
//    }

//}

//doors(1)


//9. write a function that takes an array
// as an argument and lists all the items in this array.

// function animals(x) {
    
//     var x = ["cats", "dogs", "horses", "cows"]

//     for(var i = 0; i < x.length; i++) {
//         console.log(x[i])
//     }

// }

//>>>
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function numbers(x) {
//     for(var i = 0; i < x.length; i++) {
//         console.log(x[i])
//    }
// }

// numbers(array)


//10. write a function that takes two arguments,
// adds them and checks if the output is bigger than 100;
// if it is bigger it consoles “it is bigger than 100”; 
// if not, it consoles “it is not bigger than 100"

 // var a = 76
 // var b = 25

//if(a + b > 100) {
//     console.log("The sum is larger than 100.")
//} else if(a + b < 100) {
//     console.log("The sum is smaller than 100.")
//}


//11. Create an object literal called person;
// give some key value pairs as firstName and lastName;
// finally print the length of the firstName and
// the lastName of the object.

// var object = {
//    firstName: "Alison ",
//    lastName: "Feldish",
// }

// console.log(object.firstName + object.lastName)


//12. write a function that lists all the numbers
// from 0 to 100; if the outcome number is even print
// to the console the corresponding number plus add the
// line ‘it is an even’; if it is odd add the line ‘it is odd’

// var i = 102;

// for (var i = 100; i >= 0; i--) {
//    console.log(i)
//}

// if (i % 2) {
//    console.log("The number is even.")
//}


//13. Write a function that takes two numbers as arguments;
// if the two numbers are even print ‘they are both even numbers’;
// if the two numbers are different print “there is one even and
// one odd”; if both numbers are odd print ‘they are both odd’


// function evenOrOdd(x, y) {
//    if (x % 2 == 0 && y % 2 == 0) {
//        console.log("They are both even numbers.")
//    } else if (x % 2 !== 0 && y % 2 !== 0) {
//        console.log("They are both odd numbers.")
//    } else {
//        console.log("There is one even and one odd number.")
//     }
// }

// evenOrOdd(2,3)


// 14. wite a function that lists ONLY the odd numbers between 1 to 100


// 15. Create an array filled with several strings of names
// Use a loop to print out the names, followed by ‘is my friend’.
// Like so: Jake is my friend John is my friend Samantha is my 
// friend Billy is my friend


// 16. Create a while loop that “sings” the classic song “99 Bottles
// of Root Beer on the Wall”
// The code it outputs to the console should look similar to this:
// “99 bottles of root beer on the wall, 99 bottles of root beer
// ...take one down, pass it around 98 bottles of root beer on the wall,
// 98 bottles of root beer on the wall, 98 bottles of root beer...
// take one down, pass it around 97 bottles of root beer on the wall,”
// etc., all the way to 0 bottles.


// for (var beers = 99; beers >= 0; beers--)
// {
// 	alert(beers+" bottles of beer on the wall, "+beers+" bottles of beer.");
// 	alert("Take one down and pass it around, "+ (beers-1)+" bottles of beer on the wall.")
// }



// WEEK 4 - 2/18/20

//1. Write a function that lists the first and
// last names of all the Beatles

// var data = [
//    {first: "George", last: "Harrison"},
//    {first: "Paul", last: "McCartney"},
//    {first: "Ringo", last: "Starr"},
//    {first: "John", last:"Lennon"}
// ]
 
// function Beatles() {
//     for(var i = 0; i < data.length; i++) {
//         console.log(data[i].first + " " + data[i].last)
//     }
// }


// 2. Write a function that takes an array with numbers
// as an argument and adds the sum of these numbers - 
// start with a function that equals zero and assign
// the sum of the array to it

// array = [1, 2, 3, 4, 5]

// function adding (array) {
//    var sum = 0;
//    for(var i = 0; i < array.length; i++) {
//       sum = sum + array[i]
//    }
//     console.log(sum)
// }







// 1. Write a function that takes three arguments 
// - all numbers - adds them together, split the result
// in 3 and displays the result on the console.

//function adding (x, y) {
//    var a  = x+y

//function adding (a, b, c) {
    
//    var sum = a+b+c

//    console.log (sum / 3)

//}



// 2. Write a function that takes an array
// of numbers as an argument. Then it lists
// ONLY the numbers that are divisible by 3
// If there are not such numbers console.log
//(“Sorry, no 3-divisible numbers”).
//(Think of push() method)


//var array = [1, 2, 3, 4, 5, 6, 7, 8]

//function numberArray (argument) {
//    var empty = []
//    for(var i = 0; i < argument.length; i++) {
//        if (argument[i] % 3 === 0) {
//            empty.push(argument[i])
//        }
        
//    }
//    if (empty.length === 0) {
//        console.log("There are no numbers divisible by 3.")
//    }
//    else {
//        console.log(empty)
//    }

//}

// 3. Write a function that takes an array of
// numbers as argument and lists in another array
// all numbers bigger than 10; if there are no numbers
// bigger than ten just console.log("no numbers bigger than 10");

// var array = [1, 2, 3, 4, 5, 6, 7, 8]

// function numberArray (argument) {
//     var empty = []
//     for(var i = 0; i < argument.length; i++) {
//         if (argument[i] % 3 === 0) {
//             empty.push(argument[i])
//         }


// 4. Write a function that takes a string as an argument
// and returns (console.logs) all the vowels in this string


//  5. Write a function that takes a string sentence as an
// argument and lists all the words that are longer than 5
// characters in this sentence. IF there is no word longer
// than five characters console.log('very short words")


//  6. Write a function that lists all the numbers from 0 to 100;
// If a number is divisible by 3 console.log("Fizz"); if a number
// is divisible by 5,  console.log("Buzz"); if a number is divisible
// by both 3 and 5 console.log("FizzBuzz")

//7. Create a function that takes in a string of multiple words and
//returns the first word with “ish” added to the end. Example:
//ishFunc(“Soup is my favorite.“) -> “Soupish”


//8. Write a function that takes and array of numbers and adds the sum of them.


//9. Write a function that takes a string argument and returns all
//the instances of vowels ex. -> “whatever” - returns “aee”


//10. Create an array. Using the .forEach() method on the array,
//print each element to  the console. If you are unsure on how
//to use .forEach(), Google it.


//11 Create a function that takes an array. Check to see if it contains
// a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true
//checkNums( [30, 99, 8, 22, 7] ) -> false


//12. Write a function that takes the array below as a parameter and
//lists all the names in it:
// var names = [ 
//     {name: "OGGI"},
//     {name: "GEORGE"},
//     {name: "JOHN"},
//     {name: "JAMES"},
//     {name: "PAUL"},
//     {name: "JEREMY"}
// ]

// function listingEach(array) {
//     for(var i = 0; i < names.length; i++) {
//         console.log(names[i].name)
//     }
// }

// listingEach(names)

//13. Write a function that lists all the numbers from 100 to 0;
//if a number is divisible by 4 print “This is divisible by 4”;
//if a number is divisible by 6 prints “THis is divisible by 6";
//if a number is divisible by both 4 and 6 print
//“This one is divisible by both 4 and 6”.

// 14. let images = [
//     “/static/image1.jpg”, “/static/image2.jpg”, “/static/image3.jpg”, “/static/image4.jpg”,
//     “/static/image5.jpg”, “/static/image6.jpg”, “/static/image7.jpg”, “/static/image8.jpg”,
//     “/static/image9.jpg”, “/static/image10.jpg”, “/static/image11.jpg”, “/static/image12.jpg”
//     ]

///////

//12. add the sum from the array below:
//   var obj = {
//       name: 'torture',
//       miniObj: {
//           name: 'Minitorture',
//           array: [{
//               numbers: [['a', 'b', 'c'], [1,2,3,4,5,6,7,8,9], ['fun']]
//           }]
//       }
//   }

//  console.log(obj.miniObj, array[0], numbers[1].reduce)


// 13.  Write a function that takes an array of numbers and
// creates a new array with only the even numbers from the
// first array. For instance,if you pass your function an
// array of [1, 3, 4, 6, 9], your function should return [4, 6].

// var numbers = [1,3,4,5,6,7,8,9]

// function evenNumbers() {
//      var empty = []

//      for(var i = 0; i < numbers.length; i++) {
//          if (i % 2 === 0) {
//              empty.push(numbers[i])
//         }
//      }
//  }

// console.log(empty)

// 14. write a function that takes an array of names and returns
// a whole string of these names with comma and the word ‘and’
// before the last name; [“John”, “George”, “James”, “Anna”] 
// ---> “John, George, James, and Anna”;




/////

// 15. write a function named stringy that takes a size and
// returns a string of alternating ‘1s’ and ‘0s’. the string
// should start with a 1. a string with size 6 should return
//  :‘101010’. with size 4 should return : ‘1010’. with size
//  12 shouldreturn : ‘101010101010’. The size will always
//  be positive and will only use whole numbers.

// 16. Given a non-negative integer, return an array containing
// a list of independent digits in reverse order.
// Example: 348597 => [7,9,5,8,4,3]

// 17. given a string, create a function that returns the last
// character in that string.examples:
// “morning” --> g
// “winter” --> r

// 18. write a function that takes in a math operator as a string
// followed by two parameters, x and y, then return the result of
// that math operation applied to the two parameters.
// examples:
// math(“*”, 2, 3) ---> 6
// math(“+”, 4, 5) ---> 9
// math(“/”, 5, 5) ---> 1
// math(“*”, 4, 5) ---> 20



