//STEP 1

let Movies = ["Citizen Kane", "Casablanca", "The Godfather", "Chinatown", "Amadeus"];
console.log("Second movie is: " + Movies[1]);

//STEP 2
let movies = new Array(5);
movies[0] = "Star Wars";
movies[1] = "The Manchurian Candidate";
movies[2] = "Back in the Future";
movies[3] = "Rear Window";
movies[4] = "Rope";

console.log("First movie is: " + movies[0]);

//STEP 3
movies.splice(2, 0, "Mission Impossible");
console.log("Array length is: " + movies.length);

//STEP 4
movies[0] = "Then There are None";
movies[1] = "Murder in the Nile";
movies[2] = "Unforgiven";
movies[3] = "The Mirror Crack'd";
movies[4] = "Evil Under the Sun";

delete movies[0];

console.log(movies);


//STEP 5

let favoriteMovies = [];

// Assign my favorite movies to the array
favoriteMovies[0] = "Murder at the Gallop";
favoriteMovies[1] = "Endless Night";
favoriteMovies[2] = "Murder, She Said";
favoriteMovies[3] = "The Dark Knight";
favoriteMovies[4] = "Witness for the Prosecution";
favoriteMovies[5] = "Murder on the Orient Express";
favoriteMovies[6] = "Forrest Gump";

// display each favorite movie
for (let movie of favoriteMovies) {
    console.log(" My Favorite Movie are: " + movie);
}

//STEP 6
for (let movie of favoriteMovies) {
    console.log("Movie: " + movie);
}

//STEP 7
favoriteMovies.sort();
for (let movie of favoriteMovies) {
    console.log("Sorted Movie: " + movie);
}

//STEP 8
let leastFavMovies = ["WorstA","WorstB", "WorstC"];

console.log("Movies I like:\n");
for (let movie of favoriteMovies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9

movies = favoriteMovies.concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log("\nMerged and Reverse Sorted Fovorite and Worst Movies:\n");
for (let movie of movies) {
    console.log(movie);
}

//STEP 10

let lastMovie = movies[movies.length - 1];
console.log("Last Movie: " + lastMovie);

//STEP 11
let firstMovie = movies[0];
console.log("First Movie: " + firstMovie);





//STEP 12

// Remove all elements from leastFavMovies but I do not know which way is better ??
//leastFavMovies.splice(0, leastFavMovies.length);
for (let i = 0; i < leastFavMovies.length; i++) {
    delete leastFavMovies[i];
}


// Add elements from favoriteMovies to leastFavMovies
for (let i = 0; i < 3; i++) {
    leastFavMovies.push(favoriteMovies[i]);
}

console.log("Updated Array leastFavMovies:", leastFavMovies);

//STEP 13


let moviesArray = [
    ["Movie 1", 1],
    ["Movie 2", 2],
    ["Movie 3", 3],
    ["Movie 4", 4],
    ["Movie 5", 5]
];


let movieNames = [];

// Loop retireve the movies array and filter movie names
for (let i = 0; i <  moviesArray.length; i++) {
    if (typeof moviesArray[i][0] === 'string') {
        movieNames.push( moviesArray[i]);
    }
}

// Display the filtered movie names
console.log("Filtered Movie Names:");
for (let movie of movieNames) {
    console.log(movie[0]);
}


//STEP 14

let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];


let showEmployee = function(employeeArray) {
    console.log("Employees:\n");
    for (let i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i]);
    }
};


showEmployee(employees);


//STEP 15

function filterValues(myArray) {
    let filteredArray = [];
    
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== false && myArray[i] !== null && myArray[i] !== 0 && myArray[i] !== '') {
            filteredArray.push(myArray[i]);
        }
    }
    
    return filteredArray;
}

let testArray = [58, '', 'abcd', true, null, false, 0];
let result = filterValues(testArray);
console.log(result);


//STEP 16
function getRandomItem(Myarray) {
    let randomIndex = Math.floor(Math.random() * Myarray.length);
    return Myarray[randomIndex];
}

function findLargestNumber(Myarray) {
    if (Myarray.length === 0) {
        // Handle empty array case
        return undefined;
    }

    let largestNumber = Myarray[0];

    for (let i = 1; i < Myarray.length; i++) {
        if (Myarray[i] > largestNumber) {
            largestNumber = Myarray[i];
        }
    }

    return largestNumber;
}


let numericArray = [12, 1, 45, 6, 78, 23, 56, 89, 34, 19999];
let largestNumber = findLargestNumber(numericArray);

console.log("Largest Number:", largestNumber);



