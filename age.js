function calc() {
    var currentYear = 2022;
    var birthYear = prompt("What year you born? : YYYY");
    var age = 0;
    age = currentYear - birthYear;
    document.querySelector("#result").innerHTML = "Your age is " + age;
}