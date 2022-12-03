alert("Ex.16 Objects");

// 1. Write a JavaScript program to list the properties of a JavaScript object
let student = {
   name: "Roki Balboa",
   sclass: "VII",
   rollno: 14,
 };

 console.log("The name is : " + student.name +  " The class is: " + student.sclass + " the roll is:  " + student.rollno); 

 // 2.Write a JavaScript program to delete the property from the following object. 
 //   Also print the object before or after deleting the property;

 let student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
console.log(student2);

delete student2.rollno;
console.log(student2);

// Write a JavaScript program to get the length of each property of an JavaScript object;

let car = {
    model: "Bmw",
    year: "2022",
    color: "blue"
}

console.log(car.model.length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following book;

let library = [{
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    },
    ];

console.log(library[1].readingStatus);

// Write a JavaScript program to add an properrty to array of JavaScript objects;

let library2 = [{
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    },
    ];

    let newBook = {
        author: "Dostoyevski",
        title: "War and Peace",
        libraryID: 001,
    }

    library2.push(newBook);
    console.log(library2);

    // Write a JavaScript program to determine the typeof porperty of JavaScript objects;

    let newBook1 = {
        author: "Dostoyevski",
        title: "War and Peace",
        libraryID: 001,
    }

        console.log (typeof newBook1.author, typeof newBook1.libraryID, typeof newBook1.title);


    // Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings);

    let Palacinki = {
        title: "Pancake",
        servigs: 10,
        ingredients: ["eggs","Milk","flour"],
    }
    console.log(Palacinki);
    console.log(Palacinki.ingredients);

    let triangle = {

        stranaA: 5,
        stranaB: 7,
        stranaC: 10,
    }

    console.log(`Plostinata na triangle e ${triangle.stranaA * triangle.stranaB * triangle.stranaC}`);

    



