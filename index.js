//create navigation bar
const body = document.querySelector("body");
const navBar = document.createElement("nav");

const headingDiv = document.createElement("div");
const heading = document.createElement("h1");

const listDiv = document.createElement("div");
const navList = document.createElement("ul");
const aboutME = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

navBar.classList.add("navbar");
headingDiv.classList.add("headingdiv");
heading.classList.add("title");
listDiv.classList.add("listdiv");
navList.classList.add("navlist");
aboutME.classList.add("aboutme");
menu.classList.add("menu");
contact.classList.add("contact");

body.appendChild(navBar);
navBar.appendChild(headingDiv);
headingDiv.appendChild(heading);

navBar.appendChild(listDiv);
listDiv.appendChild(navList);
navList.appendChild(aboutME);
navList.appendChild(menu);
navList.appendChild(contact);

heading.innerText = "Blue Jeans";
aboutME.innerText = "About Me";
menu.innerText = "Menu";
contact.innerText = "Contact";
console.log(body);
