function FizzBuzz() {
  for (let i = 1; i <= 20; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
}

FizzBuzz();

/*

//i don't understand this code 
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return i;
      }
    }

    return -1;
  }

  function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const word = array[i];

      if (findIndex(result, word) === -1) {
        result.push(word);
      }
    }

    return result;
  }

  console.log(unique(['green', 'red', 'blue', 'red']));
  console.log(unique(['red', 'green', 'green', 'red']));

  */