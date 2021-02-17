// grabbing all those buttons from the html will be a pain
const but1 = document.getElementById('but1')
const but2 = document.getElementById('but2')
const but3 = document.getElementById('but3')
const but4 = document.getElementById('but4')
const but5 = document.getElementById('but5')
const but6 = document.getElementById('but6')
const but7 = document.getElementById('but7')

const buttonHandle = (event) => {
  console.log(`${event.target.innerHTML} was clicked`);
}

but1.addEventListener('click', buttonHandle);
but2.addEventListener('click', buttonHandle);
but3.addEventListener('click', buttonHandle);
but4.addEventListener('click', buttonHandle);
but5.addEventListener('click', buttonHandle);
but6.addEventListener('click', buttonHandle);
but7.addEventListener('click', buttonHandle);

// instead we can get all the buttons by:

const buttonList = document.getElementsByTagName('button')

console.log(button.list[0]);

const buttonHandle2 = (event) => {
  console.log(`${event.target.innerHTML} was hovered`);
}

const buttonHandle3 = (event) => {
  alert(`${event.target.innerHTML} was hovered`);
}

// for (starting pt; where to stop aka condition that it should keep looping to , how to increment) {code};
for (let i = 0; i < buttonList.length; i++) {
  console.log(buttonList[i].innerHTML);
  buttonList[i].addEventListener('click', buttonHandle);
  buttonList[i].addEventListener('mouseover', buttonHandle2);
  buttonList[i].addEventListener('mouseover', buttonHandle3);
}


//
const arr = ["c", "a", "l", "u", "m"];

for (let i = 0; i < arr.length; i += 3) {
  console.log(arr[i]);
} // c u

for (let i = 1; i < arr.length; i += 3) {
  console.log(arr[i]);
} // a m 

for (let i = 0; i < arr.length + 1; i ++) {
  console.log(arr[i]);
} // c a l u m undefined -- the loop does not break but out put undefined

for (let i = 0; i < 4; i ++) {
  console.log(arr[i]);
} // c a l u

for (let i = 2; i < 4; i ++) {
  console.log(arr[i]);
} //  l u

// keywords: break (exit out of the loop) and continue (moves on to the next interation)
for (let i = 0; i < arr.length; i ++) {
  if (arr[i] === 'a') {
    continue; // it will skip a - if the current index is a move to the next element in the list-- aka don't continue the rest of the code with a. 
  }

  console.log(arr[i]);
} // c l u m

for (let i = 0; i < arr.length; i ++) {
  if (arr[i] === 'a') {
    continue;
  }

  if (arr[i] === "u") {
    console.log(arr[i - 1]);
    break;
  }

  console.log(arr[i]);
} // c l l 

const find = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    console.log('index:', i, arr[i]);
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log("first search");
console.log(find(arr, 'c')); // this will do one interations
console.log("first search");
console.log(find(arr, 'm')); // this will do five interations