function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var uppercase = 'HELLO!'
string.toUpperCase() === uppercase
var lowercase = 'hello!'
string.toLowerCase() === lowercase
var mixedCase = 'Hi there!'
string.toLowerCase() === mixedCase 
string.toUpperCase() === mixedCase
function sayHiToGrandma(string) {
 if (string.toUpperCase()) {
   return "I can\'t hear you!";
 } else if (string.toLowerCase()) {
  return "YES INDEED";
 } else {
   return "I love you,too";
 }
}