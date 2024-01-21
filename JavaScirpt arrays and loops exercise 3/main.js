/*
const array1 = ["left", "right", "search", "right"];

let index = -1;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] === "search") {
    index = i;
  }
}

console.log(index);


const array1 = ["left", "search", "right", "search", "right"];

let index = -1;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] === "search") {
    index = i;
    break;
  }
}

console.log(index);


*/

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  console.log(index);
}

findIndex(["left", "right", "search", "right"], "search");
//new exercise
/*

let newFoodList = [];

function removeEgg(food) {
  for (let i = 0; i < food.length; i++) {
    if (food[i] === "egg") {
      continue;
    } else {
      newFoodList.push(food[i]);
    }
  }
  return newFoodList;
}

removeEgg(["egg", "apple", "banana", "egg", "orange"]);
console.log(newFoodList);

*/

/*
let newFoodList = [];
// remove just two eggs in list 
function removeEgg(food) {
  let eggcount = 0;
  for (let i = 0; i < food.length; i++) {
    if (food[i] === "egg" && eggcount < 2) {
      eggcount++;

      console.log(eggcount);
      continue;
    } else {
      newFoodList.push(food[i]);
    }
  }
  return newFoodList;
}

removeEgg(["egg", "egg", "apple", "banana", "egg", "orange"]);
console.log(newFoodList);
*/

let newFoodList = [];
// remove just two eggs in the last of the list
function removeEgg(food) {
  const reversedFood = food.reverse();
  let eggcount = 0;
  for (let i = 0; i < reversedFood.length; i++) {
    if (reversedFood[i] === "egg" && eggcount < 2) {
      eggcount++;

      console.log(eggcount);
      continue;
    } else {
      newFoodList.push(reversedFood[i]);
    }
  }

  return newFoodList.reverse();
}

removeEgg(["egg", "egg", "apple", "banana", "egg", "orange"]);
console.log(newFoodList);
