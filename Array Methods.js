//Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
function arrayExercise() {
// 1) Remove the last item from the vegetable array.
    vegetables.pop();
    console.log("vegetables: ", vegetables);

    console.log("..........");

// 2) Remove the fist item from the fruit tray
    fruit.shift();
    console.log("fruit: ", fruit);

    console.log("..........");
    
// 3) Find the index of "orange."    
   var indexOfOrange = fruit.indexOf("orange");
    console.log(indexOfOrange);

    console.log("..........");

// 4) Add that number to the end of the fruit array.
    fruit.push(indexOfOrange);
    console.log("fruit: ", fruit);

    console.log(".........."); 


// 5) Use the length property to find the length of the vegetable array.
    console.log(vegetables.length);
    
    console.log("..........")

// 6) Add that number to the end of the vegetable array.
    vegetables.push(vegetables.length);
    console.log("vegetables: ", vegetables);

    console.log(".........."); 

// 7) Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables); 
    console.log(fruit.concat(vegetables));

    console.log("..........");

// 8) Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    console.log(food);

    console.log("..........");

// 9) Reverse your array.
    food.reverse();
    console.log(food);

    console.log("..........");

// 10) Turn the array into a string and return it.
    food.toString();
    console.log(food)



};

console.log(arrayExercise());