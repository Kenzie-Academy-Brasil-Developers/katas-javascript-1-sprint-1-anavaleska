function oneThroughTwenty() {
  let results = [];
  for (let i = 1; i <= 20; i++) {
    results.push(i);
  }
  return results;
}
console.log(oneThroughTwenty());

function evensToTwenty() {
  let results = [];
  for (let a = 2; a <= 20; a++) {
    if (a % 2 == 0) {
      results.push(a);
    }
  }
  return results;
}
console.log(evensToTwenty());

function oddsToTwenty() {
  let results = [];
  for (let b = 1; b <= 20; b++) {
    if (b % 2 == 1) {
      results.push(b);
    }
  }
  return results;
}
console.log(oddsToTwenty());

function multiplesOfFive() {
  let results = [];
  for (let c = 5; c <= 100; c++) {
    if (c % 5 == 0) {
      results.push(c);
    }
  }
  return results;
}
console.log(multiplesOfFive());

function squareNumbers() {
  let results = [];

  for (let d = 1; d <= 100; d++) {
    if (Math.sqrt(d) % 1 === 0) {
      results.push(d);
    }
  }
  return results;
}
console.log(squareNumbers());

function countingBackwards() {
  let results = [];

  for (let e = 20; e >= 1; e--) {
    results.push(e);
  }
  return results;
}
console.log(countingBackwards());

function evenNumbersBackwards() {
  let results = [];

  for (let f = 20; f >= 2; f--) {
    if (f % 2 == 0) {
      results.push(f);
    }
  }
  return results;
}
console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let results = [];

  for (let g = 20; g >= 1; g--) {
    if (g % 2 == 1) {
      results.push(g);
    }
  }
  return results;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let results = [];

  for (let h = 100; h >= 5; h--) {
    if (h % 5 == 0) {
      results.push(h);
    }
  }
  return results;
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let results = [];

  for (let j = 100; j >= 1; j--) {
    if (Math.sqrt(j) % 1 === 0) {
      results.push(j);
    }
  }
  return results;
}
console.log(squareNumbersBackwards());
