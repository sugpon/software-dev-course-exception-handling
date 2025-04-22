/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running
*/

// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================
const readline = require('readline-sync'); // Importing readline-sync for user input
let animals = []; // Array to store animal names
let fees = []; // Array to store adoption fees

function addAnimal(name, fee) {    // Function to add an animal and its fee
    if (!name || isNaN(fee)< 0 || fee < 0) { // Check if name is empty or fee is negative
        throw new Error("Invalid animal name or adoption fee!"); // Throw an error if invalid
    }
    animals.push(name); // Add animal name to the array
    fees.push(fee); // Add fee to the array
}

function getAdoptionFee(animalName) {   // Function to get the adoption fee for a specific animal
    let index = animals.indexOf(animalName); // Find the index of the animal in the array
    if (index === -1) {
        throw new Error("Animal not found in records!"); // Throw an error if animal is not found
    }
    return fees[index]; // Return the fee for the animal
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System"); // Welcome message

while (true) {
    try {
        let action = readline.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            try {
                let animal = readline.question("Enter the animal's name: ");
                let fee = Number(readline.question("Enter the adoption fee: "));

                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            try {
                let animal = readline.question("Enter the animal's name to find its adoption fee: ");
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}

// ============================================
// 🧩 Problems to Solve
// ============================================

/*
🔹 Invalid Input Errors:
- What if the user enters a negative fee?
- What if the animal name is blank?
- What if an animal isn't found?

🔹 Code Flow Problems:
- What happens when an exception is thrown?
- Does the rest of the program continue?

🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/
