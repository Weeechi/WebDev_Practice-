// var message = 'Hello there';
// var name = ' Kris';

// console.log(message + name);

// ####################################
const prompt=require("prompt-sync")({sigint:true}); 


var x = prompt("write something here please: ")
console.log('You have printed ' + x.length +' characters ');
v = 140 - x.length 
console.log('You have ' + v + " chracters remaining" );
