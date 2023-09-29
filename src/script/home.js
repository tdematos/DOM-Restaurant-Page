import aboutMe from "./aboutme";
import foodMenu from "./menu";

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

  //clicking tabs
  heading.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    generateNavbar();
  });

  aboutME.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    aboutMe();
  });

  menu.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    foodMenu();
  });

  heroButton.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    foodMenu();
  });
}
generateNavbar();

export default generateNavbar;
