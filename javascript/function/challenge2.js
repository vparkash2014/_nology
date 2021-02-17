// Function 1:
// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const getDescription = (numChild, partnerName, geoLocation, jobTitle) => `I am currently a ${jobTitle} living in ${geoLocation}, and married to ${partnerName} with ${numChild} kids.`

console.log(getDescription(0, "Tom", "Melbourne", 'Teacher'));
console.log(getDescription(10, "Kate", "London", "Devopler"));
console.log(getDescription(2, "Jana", "Germany", "Analyicts"))

//Function 2:
// Ever wonder how much a lifetime supply of Snickers would actually be? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the screen like so: "You will need X to last you until the ripe old age of Y"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const maxAge = 80;

const calculateSupply = (age, amountPerDay) => `You will need ${Math.floor((maxAge - age)* 365 * amountPerDay)} to last you until the ripe old age of ${maxAge}`;

console.log(calculateSupply(28, 1.5));
console.log(calculateSupply(30, 5));
console.log(calculateSupply(2, 23));

