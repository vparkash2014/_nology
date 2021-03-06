// 1. Write a function to find the perimeter of a rectangle.
// inputs: width & height
// output: the perimeter

const perimeterFun = (width, height) => {
  return 2 * ( height + width);
}

console.log("the perimeter of 10 and 5 is ", perimeterFun(10, 5));
console.log("the perimeter of 25 and 10 is ", perimeterFun(25, 10));
console.log("the perimeter of 3 and 8 is ", perimeterFun(3, 8));

const output = document.getElementById('output');
output.innerHTML = `the perimeter of 10 and 5 is ${perimeterFun(10, 5)}` + "<br>"
output.innerHTML += `the perimeter of 25 and 10 is ${perimeterFun(25, 10)}` + "<br>"
output.innerHTML += `the perimeter of 3 and 8 is ${perimeterFun(3, 8)}` + "<br>"

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
// inputs: radius
// output: area of circle

const circleArea = (radius) => {
  return Math.PI * radius ** 2;
}

console.log("the area of 10", circleArea(10));
console.log("the area of 100", circleArea(100));
console.log("the area of 15", circleArea(15));

output.innerHTML += `the area of 10 is ${circleArea(10)}` + "<br>"
output.innerHTML += `the area of 100 is ${circleArea(100)}` + "<br>"
output.innerHTML += `the area of 15 is ${circleArea(15)}` + "<br>"

// 3. Now do the same to find the circumference of a circle...

const circleCircumference = (radius) => {
  return 2 * Math.PI * radius;
}

console.log("the circumference of 10 is ",circleCircumference(10));
console.log("the circumference of 100 is ",circleCircumference(100));
console.log("the circumference of 15 is ",circleCircumference(15));

output.innerHTML += `the circumference of 10 is ${circleCircumference(10)}` + "<br>"
output.innerHTML += `the circumference of 100 is ${circleCircumference(100)}` + "<br>"
output.innerHTML += `the circumference of 15 is ${circleCircumference(15)}` + "<br>"