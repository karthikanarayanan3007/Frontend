// TASK 1: EVEN OR ODD
function EvenOdd(number) {
  if (number % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}
console.log("one:", EvenOdd(10));
console.log("oneone:", EvenOdd(7));



// TASK 2: LARGEST OF TWO NUMBERS
function findLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("Two:", findLargest(25, 40));



// TASK 3: VOTING ELIGIBILITY
function checkVote(age) {
  if (age >= 18) {
    return "Eligible to Vote";
  } else {
    return "Not Eligible to Vote";
  }
}
console.log("Threeone:", checkVote(20));
console.log("Threetwo:", checkVote(16));


// TASK 4: SUM OF ARRAY
function getTotal(numbers) {
  let total = 0;

  for (let x= 0; x< numbers.length; x++) {
    total = total + numbers[x];
  }

  return total;
}
console.log("Four:", getTotal([10, 20, 30, 40, 50]));



// TASK 5: COUNT EVEN NUMBERS
function countEven(numbers) {
  let count = 0;

  for (let z= 0; z< numbers.length; z++) {
    if (numbers[z] % 2 === 0) {
      count = count + 1;
    }
  }

  return count;
}
console.log("Five:", countEven([10, 15, 20, 25, 30, 35, 40]));

























