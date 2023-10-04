import foodMenu from "./menu";
import aboutMe from "./aboutme";
import generateNavbar from "./home";

function contactME() {
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
  const contactSection = document.createElement("section");
  const formContainer = document.createElement("div");
  const formHeader = document.createElement("h3");
  const form = document.createElement("form");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const textLabel = document.createElement("label");
  const textArea = document.createElement("textarea");
  const formSubmitButton = document.createElement("button");

  body.appendChild(contactSection);
  contactSection.appendChild(formContainer);
  formContainer.appendChild(formHeader);
  formContainer.appendChild(form);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(textLabel);
  form.appendChild(textArea);
  form.appendChild(formSubmitButton);

  contactSection.classList.add("contact-section");
  form.classList.add("form");
  formContainer.classList.add("form-container");
  formHeader.classList.add("form-header");
  formSubmitButton.classList.add("contact-button");
  emailInput.classList.add("email-field");
  textArea.classList.add("text-area");
  emailLabel.classList.add("email-label");
  textLabel.classList.add("text-label");

  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "john@email.com");
  textArea.setAttribute("placeholder", "text...");

  formHeader.innerText = "Contact Us";
  formSubmitButton.innerText = "Submit";
  emailLabel.innerText = "Email";
  textLabel.innerText = "Message";

  formSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Nice Try!");
  });

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

  menu.addEventListener("click", () => {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    foodMenu();
  });

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
}

export default contactME;
