const title = document.getElementById("title");
title.textContent = "Welcome to JavaScript";
title.style.color = "blue";
title.style.fontSize = "30px";



const paragraphs = document.getElementsByClassName("description");
paragraphs[0].style.color = "red";
paragraphs[1].style.backgroundColor = "yellow";
paragraphs[2].style.fontSize = "25px";



const username = document.getElementById("username");
username.value = "Arun";
username.style.backgroundColor = "lightblue";

const email = document.querySelector("#email");
email.value = "arun@gmail.com";

const submitButton = document.getElementById("submitButton");
submitButton.disabled = true;


const technologyHeadings = document.querySelectorAll(".technology");

technologyHeadings[0].textContent = "HTML";
technologyHeadings[1].textContent = "CSS";
technologyHeadings[2].textContent = "JavaScript";
technologyHeadings[3].textContent = "React";
technologyHeadings[4].textContent = "Node.js";

technologyHeadings[0].style.color = "red";
technologyHeadings[1].style.color = "blue";
technologyHeadings[2].style.color = "green";
technologyHeadings[3].style.color = "purple";
technologyHeadings[4].style.color = "orange";