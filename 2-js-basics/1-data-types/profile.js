// User Profile Object demonstrating JavaScript data types
const userProfile = {
    name: "Aditya Gupta",        // String
    age: 21,                     // Number
    isStudent: true,             // Boolean
    favoriteColors: ["Blue", "Black", "Crimson"], // Array
    address: {                   // Object
        street: "123 Tech Lane",
        city: "Developer City",
        zipCode: "10101"
    }
};

// Function to display the profile using string concatenation and template literals
function displayProfile() {
    console.log("=== User Profile ===");
    
    // 1. String Concatenation (Older way using the + operator)
    console.log("Name: " + userProfile.name);
    
    // 2. Template Literals (Modern ES6 way using backticks ` `)
    console.log(`Age: ${userProfile.age}`);
    
    // 3. Boolean Logic
    if (userProfile.isStudent) {
        console.log(`${userProfile.name} is currently an active student. Keep learning!`);
    } else {
        console.log(`${userProfile.name} is not a student.`);
    }

    // Accessing array elements and nested object properties
    console.log(`Favorite Colors: ${userProfile.favoriteColors.join(", ")}`);
    console.log(`Location: ${userProfile.address.city}, ${userProfile.address.zipCode}`);
    console.log("====================\n");
}

// Function to update the user's age, demonstrating arithmetic operations
function celebrateBirthday() {
    console.log(`🎉 It's ${userProfile.name}'s birthday!`);
    
    // Arithmetic operation: adding 1 to the current age
    userProfile.age = userProfile.age + 1; // This can also be written as: userProfile.age++
    
    console.log(`They are now ${userProfile.age} years old.\n`);
}

// Function to update student status using boolean logic
function toggleStudentStatus() {
    // Boolean logic: the ! (NOT) operator flips true to false, and false to true
    userProfile.isStudent = !userProfile.isStudent;
    
    console.log(`Student status has been toggled to: ${userProfile.isStudent}\n`);
}
function ArrayOperations() {
    // Demonstrating array operations
    console.log("=== Array Operations ===");
    if(userProfile.favoriteColors[3]){
    console.log('It works as intended');
    }else{
        console.log(userProfile.favoriteColors[2]);
    }

}

// --- Testing the Program ---

// 1. Initial display
displayProfile();

// 2. Perform operations
celebrateBirthday();
toggleStudentStatus();
ArrayOperations();
// 3. Display updated profile
displayProfile();
