var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >18) {
    greeting = 'Good evening!';
} else if (hourNow >12) {
    greeting = 'Good affternoon!';
} else if (hourNow >0) {
    greeting = 'Good mornigh!!';
} else {
    greeting = 'Welcome!'
}
document.write('<h3>'+greeting + '</h3>')