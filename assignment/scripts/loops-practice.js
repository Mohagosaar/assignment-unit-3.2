console.log("****** Loops Practice *******");

// 1. 'for' loop
console.log("---- 1. For loops ----");
// Example: a for loop to console.log numbers from 0 to 3
console.log("count from 0 to 3");
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log("count from 0 to 5");

for (let index = 0; index <= 5; index++) {
  console.log("counting index numbers", index);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// the first and second part of the forloop, the initialization and the condition parts
for (index = 3; index <= 5; index++) {
  console.log("count from 3 to 5", index);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
/* you need to use if conditional statement, to separate from the odd and even numbers
       using module keyword %*/
for (let even = 1; even <= 10; even++) {
  if (even % 2 == 0) {
    console.log("count even numbers from 2 to 10 (2, 4, 6, 8, 10):", even);
  }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log("STRETCH: countdown from 5 to 0");

for (let countdown = 5; countdown >= 0; countdown--) {
  console.log("STRETCH: countdown from 5 to 0", countdown);
}

// 2. For of loops
console.log("---- 2. For Of loop ----");
let stars = ["Polaris", "Gacrux", "Formalhaut", "Rigel", "Deneb"];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log("Some stars:");
for (const fetch of stars) {
  console.log(fetch);
}

// 3. While loops
console.log("---- 3. While loop ----");

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let numberstoprint = [0];
while (numberstoprint < stars.length) {
  console.log(stars[numberstoprint]);
  numberstoprint++;
}
console.log("Some stars using while:");

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let numbersToPrint = 0;
while (numbersToPrint <= 5) {
  console.log("count from 0 to 5", numbersToPrint);
  numbersToPrint++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
let countnumber = 10;
while (countnumber >= 5) {
  console.log("count backwards from 10 to 5", countnumber);
  countnumber--;
}
