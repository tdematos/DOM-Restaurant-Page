function aboutMe() {
  const body = document.querySelector("body");
  const navBar = document.createElement("nav");

  const headingDiv = document.createElement("div");
  const heading = document.createElement("h1");

  const listDiv = document.createElement("div");
  const navList = document.createElement("ul");
  const aboutME = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  const aboutMELink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  navBar.classList.add("about-navbar");
  headingDiv.classList.add("headingdiv");
  heading.classList.add("about-logo");
  listDiv.classList.add("listdiv");
  navList.classList.add("navlist");
  aboutME.classList.add("about-aboutme");
  menu.classList.add("about-menu");
  contact.classList.add("about-contact");

  body.appendChild(navBar);
  navBar.appendChild(headingDiv);
  headingDiv.appendChild(heading);

  navBar.appendChild(listDiv);
  listDiv.appendChild(navList);
  navList.appendChild(aboutMELink);
  navList.appendChild(menuLink);
  navList.appendChild(contactLink);
  aboutMELink.appendChild(aboutME);
  menuLink.appendChild(menu);
  contactLink.appendChild(contact);

  heading.innerText = "Blue Jeans";
  aboutME.innerText = "About Me";
  menu.innerText = "Menu";
  contact.innerText = "Contact";
  console.log(body);

  //create hero section banner
  const aboutSection = document.createElement("section");
  const aboutTitle = document.createElement("h2");
  const aboutText = document.createElement("p");
  const aboutImageContainer = document.createElement("div");
  const aboutImage = document.createElement("img");

  aboutSection.classList.add("about");
  aboutTitle.classList.add("about-title");
  aboutText.classList.add("about-subtitle");
  aboutImageContainer.classList.add("about-img-container");
  aboutImage.classList.add("about-img");

  body.appendChild(aboutSection);
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutText);
  aboutSection.appendChild(aboutImageContainer);
  aboutImageContainer.appendChild(aboutImage);

  aboutImage.setAttribute("src", "/src/assets/pexels-rene-strgar-13814644.jpg");
  aboutImage.setAttribute("alt", "picture of neopolitan styled pizza");

  aboutTitle.innerText = "Italian-Style, Thin Crust Pizzas";
  aboutText.innerText = `Blue Jeans prepares its traditional Italian-style pizza 
(with roots in Boston’s North End) by hand-tossing dough 
ladling our sweet, chunky sauce and blanketing it with a 
three-cheese blend of mozzarella, cheddar and Romano. Blue Jeans’ 
deep dish is our homage to the famous 1940s’ Chicago deep 
dish pies: pastry-like pie crust, layered, blended mozzarella, 
cheddar and Romano cheeses, tomato filets sauce.`;
}

export default aboutMe;
