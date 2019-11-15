var age = prompt("How old are you?");

var newDate = new Date();

var thisYear = newDate.getFullYear();

var birthYear = thisYear - age;

document.getElementById("year").innerHTML = birthYear;
