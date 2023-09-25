//create navigation bar
function generateNavbar() {
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

  navBar.classList.add("navbar");
  headingDiv.classList.add("headingdiv");
  heading.classList.add("title");
  listDiv.classList.add("listdiv");
  navList.classList.add("navlist");
  aboutME.classList.add("aboutme");
  menu.classList.add("menu");
  contact.classList.add("contact");

  aboutMELink.setAttribute("href", "/about-me.html");
  menuLink.setAttribute("href", "/menu.html");
  contactLink.setAttribute("href", "/contact.html");

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
  const heroSection = document.createElement("section");
  const heroTitle = document.createElement("h2");
  const heroSubTitle = document.createElement("p");
  const heroButton = document.createElement("button");

  heroSection.classList.add("hero");
  heroTitle.classList.add("hero-title");
  heroSubTitle.classList.add("hero-subtitle");
  heroButton.classList.add("hero-button");

  body.appendChild(heroSection);
  heroSection.appendChild(heroTitle);
  heroSection.appendChild(heroSubTitle);
  heroSection.appendChild(heroButton);

  heroTitle.innerText = "Super Fast Delicious Pizza";
  heroSubTitle.innerText = "Check out our BRAND-NEW Webpage!";
  heroButton.innerText = "See Menu";
}
generateNavbar();

export default generateNavbar;
