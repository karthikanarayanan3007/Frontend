// TASK 1: 
const colorHeading = document.getElementById("colorHeading");
const changeHeadingButton = document.getElementById("changeHeadingButton");

colorHeading.style.color = "black";

changeHeadingButton.addEventListener("click", function () {
  colorHeading.style.color = "red";
  colorHeading.style.fontSize = "30px";
});


// TASK 2: 
const colorBox = document.getElementById("colorBox");
const blueButton = document.getElementById("blueButton");
const yellowButton = document.getElementById("yellowButton");

colorBox.style.backgroundColor = "white";

blueButton.addEventListener("click", function () {
  colorBox.style.backgroundColor = "blue";
  colorBox.style.color = "white";
});

yellowButton.addEventListener("click", function () {
  colorBox.style.backgroundColor = "yellow";
  colorBox.style.color = "black";
});


// TASK 3: 
const showHideParagraph = document.getElementById("showHideParagraph");
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");

hideButton.addEventListener("click", function () {
  showHideParagraph.style.display = "none";
});

showButton.addEventListener("click", function () {
  showHideParagraph.style.display = "block";
});


// TASK 4: 
const toggleHeading = document.getElementById("toggleHeading");
const toggleButton = document.getElementById("toggleButton");
let headingIsVisible = true;

toggleButton.addEventListener("click", function () {
  if (headingIsVisible) {
    toggleHeading.style.display = "none";
    headingIsVisible = false;
  } else {
    toggleHeading.style.display = "block";
    headingIsVisible = true;
  }
});

