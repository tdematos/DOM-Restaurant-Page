import aboutMe from "./aboutme";
import contactME from "./contact";
import generateNavbar from "./home";

function foodMenu() {
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
  const menuContainer = document.createElement("div");
  const subMenuContainer = document.createElement("div");
  const subMenuContainerTwo = document.createElement("div");
  const innerMenuContainer = document.createElement("div");
  const innerMenuContainerTwo = document.createElement("div");
  const innerMenuContainerThree = document.createElement("div");
  const innerMenuContainerFour = document.createElement("div");
  const pizzaOne = document.createElement("h3");
  const pizzaOneDesc = document.createElement("p");
  const pizzaOnePrice = document.createElement("p");
  const pizzaTwo = document.createElement("h3");
  const pizzaTwoDesc = document.createElement("p");
  const pizzaTwoPrice = document.createElement("p");

  aboutSection.classList.add("about");
  aboutTitle.classList.add("about-title");
  aboutText.classList.add("about-subtitle");
  aboutImageContainer.classList.add("about-img-container");

  body.appendChild(aboutSection);
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutText);
  aboutSection.appendChild(menuContainer);
  menuContainer.appendChild(subMenuContainer);
  menuContainer.appendChild(subMenuContainerTwo);
  subMenuContainer.appendChild(innerMenuContainer);
  subMenuContainer.appendChild(innerMenuContainerTwo);
  subMenuContainerTwo.appendChild(innerMenuContainerThree);
  subMenuContainerTwo.appendChild(innerMenuContainerFour);
  innerMenuContainer.appendChild(pizzaOne);
  innerMenuContainer.appendChild(pizzaOneDesc);
  innerMenuContainerTwo.appendChild(pizzaOnePrice);
  innerMenuContainerThree.appendChild(pizzaTwo);
  innerMenuContainerThree.appendChild(pizzaTwoDesc);
  innerMenuContainerFour.appendChild(pizzaTwoPrice);

  subMenuContainer.classList.add("inner-container-one");
  subMenuContainerTwo.classList.add("inner-container-two");
  innerMenuContainer.classList.add("sub-menu");
  innerMenuContainerTwo.classList.add("sub-menu");
  innerMenuContainerThree.classList.add("sub-menu");
  innerMenuContainerFour.classList.add("sub-menu");

  aboutTitle.innerText = "Menu";
  aboutText.innerText = `Check out our assortment of the most tastiest pizzas on the planet!`;
  pizzaOne.innerText = "Pepperoni Pizza";
  pizzaOneDesc.innerText = "Pepperoni, mozzeralla, red pepper, EVOO";
  pizzaOnePrice.innerText = "$18.89";
  pizzaTwo.innerText = "Cheese Pizza";
  pizzaTwoDesc.innerText = "Mozzeralla, parmasean, garlic, EVOO";
  pizzaTwoPrice.innerText = 17.89;

  //create pager footer here
  const footer = document.createElement("footer");
  const imageByContainer = document.createElement("div");
  const githubLinkContainer = document.createElement("div");
  const menuSelectionContainer = document.createElement("div");
  const imageLink = document.createElement("a");
  const githubLink = document.createElement("a");
  const smallAboutme = document.createElement("p");
  const smallMenu = document.createElement("p");
  const smallContact = document.createElement("p");

  body.appendChild(footer);
  footer.appendChild(imageByContainer);
  footer.appendChild(githubLinkContainer);
  footer.appendChild(menuSelectionContainer);
  imageByContainer.appendChild(imageLink);
  githubLinkContainer.appendChild(githubLink);
  menuSelectionContainer.appendChild(smallAboutme);
  menuSelectionContainer.appendChild(smallMenu);
  menuSelectionContainer.appendChild(smallContact);

  footer.classList.add("footer");
  imageLink.classList.add("image-link");
  githubLink.classList.add("github-link");
  menuSelectionContainer.classList.add("menuselect-container");
  smallAboutme.classList.add("small-aboutme");
  smallContact.classList.add("small-contact");
  smallMenu.classList.add("small-menu");

  imageLink.innerText = "image by Rene Strgar";
  githubLink.innerText = "My GitHub";
  smallAboutme.innerText = "About Me";
  smallMenu.innerText = "Menu";
  smallContact.innerText = "contact";

  githubLink.setAttribute("href", "https://github.com/tdematos");
  imageLink.setAttribute(
    "href",
    "https://www.pexels.com/photo/italian-style-pizza-13814644/"
  );

  aboutME.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    aboutMe();
  });

  heading.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    generateNavbar();
  });

  contact.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    contactME();
  });
}

export default foodMenu;
