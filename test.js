var correct= 0;

var answer1 = prompt("Name a programming language that is also a gem");
if ( answer1.toUpperCase() === 'RUBY') {
correct += 1;
}

var answer2 = prompt("Name a programming language that has the same name as a snake");
if ( answer2.toUpperCase() === 'PYTHON') {
correct += 1;
}
var answer3 = prompt("What do you use to style a web page");
if ( answer3.toUpperCase() === 'CSS') {
correct += 1;
}
var answer4 = prompt("What do you use to structure a web page");
if ( answer4.toUpperCase() === 'HTML') {
correct += 1;
}
var answer5 = prompt("What do you use to add intractivity to a web page");
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
correct += 1;
}

document.write ("<p> you got " + correct + " out of 5 questions correct <p>");

if ( correct === 5 ) {
document.write ("<p><strong> You earned gold in this challenge</strong></p>");
}
else if (correct >= 3)
{
document.write("<p><strong> You earned silver in this challenge </strong></p>");
}
else if (correct>=1)
{
document.write("<p><strong> You earned bronze in this challenge </strong></p>");
}
else {
document.write("<p><strong> You earned Nothing in this challenge. </strong></p>");
}