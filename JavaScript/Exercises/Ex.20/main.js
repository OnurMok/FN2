// Make a loop of two numbers and print the sum of them;
for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
      console.log(`The sum of ${i} and ${j} is: ${i + j}`);
    }
  }

//   Write a JS code to print Even numbers in given array

let array = [1, 2, 6, 7, 9];

 for (i = 0; i < array.length; i++) {
   if (array[i] % 2 == 0) {
     console.log(array[i]);
   }
 }

 // -Make a product of two arrays of the same size using for loop.

 let arr1 = [2, 4, 6, 7, 8];
 let arr2 = [4, 6, 1, 5, 0];

 let product = [];

for (i = 0; i < arr1.length; i++) {
 product[i] = arr1[i] * arr2[i];

console.log(` The product of ${arr1[i]} and ${arr2[i]} is: ${product[i]}`);
}

// // Write a JS code to find the largest number in an array

let array1 = [1, 2, 70, 3, 10, 5, 0];

let largest = 0;

 for (i = 0; i < array1.length; i++) {
            if (array1[i] > largest) {
            largest = array1[i];
        }
    }
 console.log(largest);
 
     let array2 = [1, 2, 70, 3, 10, 5, 0];
     let minnumber = array2[0];
      
     for (i = 0; i < array2.length; i++) {
             if (array2[i] < minnumber) {
            minnumber = array2[i];
        }
    }

     console.log(minnumber);


// //  Iterate through all numbers from 1 to 45. Print the following:
// // For multiples of 3 print “Fizz”
// // For multiples of 5 print “Buzz”
// // For multiples of 3 and 5 print “FizzBuzz”

        for (var i = 1; i <= 45; i++) {  
                if (i % 3 == 0 && i % 5 == 0) {
                        console.log("FizzBuzz");
                } else if (i % 3 == 0) {
                            console.log("Fizz");
                } else if (i % 5 == 0) {
                            console.log("Buzz");
            }
        }

// // List the all elements from the array cars =[BMW,AUDI,FIAT, MECEDES, LAMBURGINI,TESLA];

cars = ["BMW", "AUDI", "FIAT", "MECEDES", "LAMBURGINI", "TESLA"];

    for (x of cars) {
        console.log(x);
        }


// // 5.The for in Loop
// // List the property from the following object:

Restaurant = {
         Name: "REMO",
         Cake: "CheeseCake",
         Ingidients: ["Cream Chese", "Sugar", "Vanila Extract"],
    };

    for (elements in Restaurant) {
        console.log(elements);
    }

    // List the ingridients

    for (elements in Restaurant.Ingidients) {
     console.log(Restaurant.Ingidients[elements]);
     }