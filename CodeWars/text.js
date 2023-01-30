
// function areYouPlayingBanjo(name) {
//     x = name.slice(0,1)
//     if (x === 'R' || x === 'r') {
//         console.log(name + " plays the Banjo");
//         return name + " plays the Banjo"
//     } 
//     else {
//         console.log(name + " does not play the Banjo");
//         return name + " does not play the Banjo"
//     }
//   }

//   areYouPlayingBanjo('Kris');

///////////////////////////////////////////////////////////

function evenOrOdd(number) {
  if(number % 2 === 0){
      console.log("even");
      return 'Even'
  } else {
    console.log("odd");  
    return "Odd"
  }
}
evenOrOdd("5");