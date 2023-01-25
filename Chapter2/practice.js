// var message = 'Hello there';
// var name = ' Kris';

// console.log(message + name);

// ####################################
const prompt=require("prompt-sync")({sigint:true}); 


// var x = prompt("write something here please: ")
// console.log('You have printed ' + x.length +' characters ');
// v = 140 - x.length 
// console.log('You have ' + v + " chracters remaining" );

// ##########################################
// var tweet = prompt("What is your Tweet?: ")
// console.log(tweet.slice(0,10));
// ###########################################
var name = prompt('what is your name?: ')
x = name.slice(0,1)
x.toUpperCase()
console.log("Hi Nice to meet you " + x.toUpperCase() + name.slice(1,4));
