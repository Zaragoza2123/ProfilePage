var firstLine = document.querySelector("#firstline");
var secondLine = document.querySelector("#secondline");
var circle = document.querySelector("#circle");
var circle2 = document.querySelector("#circle2");
var count = 500;
 var count2 = 2;
function disappear() {
    count2--;
    count++;
    firstLine.remove();
    circle.innerText=count2;
    circle2.innerText=count;
}
function disappear1() {
    count2--;
    firstLine.remove();
    circle.innerText =count2;
}
function disappear2() {
    count++;
    count2--;
    secondLine.remove();
    circle.innerText=count2;
    circle2.innerText=count;
}
function disappear3() {
    count2--;
    secondLine.remove();
    circle.innerText =count2;
}
var cha = document.querySelector("#cha");

function change() {
    cha.innerText = "Monkey D Luffy";
}