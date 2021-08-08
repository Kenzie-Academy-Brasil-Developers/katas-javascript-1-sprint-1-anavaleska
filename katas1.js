function oneThroughTwenty() {

   for (let i = 1; i <= 20; i++){
    console.log(i);
  }
}
oneThroughTwenty();
 

function evensToTwenty() {
    
  for(let i = 2; i <= 20; i++){
      if ((i % 2) == 0){
        console.log(i);
      }
      
    }
}
evensToTwenty();


function oddsToTwenty() {
  
  for(let i = 1; i <= 20; i++){
    if ((i % 2) == 1){
      console.log(i);
    }
    
  }
}
oddsToTwenty();


function multiplesOfFive() {
    
  for(let i = 5; i <= 100; i++){
    if ((i % 5) == 0){
      console.log(i);
    }
  }

}
multiplesOfFive();


function squareNumbers() {
    
 for(let i = 1; i <= 100; i++){
   if(Math.sqrt(i) % 1 === 0){
    console.log(i);
   }
 }
    
}
squareNumbers();


function countingBackwards() {
    
  for(let i = 20; i >= 1; i--){
    console.log(i);
  }
}
countingBackwards();


function evenNumbersBackwards() {
 
  for(let i = 20; i >= 2; i--){
    if((i % 2) == 0){
      console.log(i);
    }
  }
}
evenNumbersBackwards();


function oddNumbersBackwards() {
    
  for(let i = 20; i >= 1; i--){
    if((i % 2) == 1){
      console.log(i);
    }
  }
}
oddNumbersBackwards();


function multiplesOfFiveBackwards() {
    
 for(let i = 100; i >= 5; i--){
   if((i % 5) == 0){
     console.log(i);
   }
 }
}
multiplesOfFiveBackwards();

function squareNumbersBackwards() {
    
   for(let i = 100; i >= 1; i--){
     if (Math.sqrt(i) % 1 === 0){
       console.log(i);
     }
   }
}
squareNumbersBackwards();


