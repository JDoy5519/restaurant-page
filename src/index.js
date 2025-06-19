import loadPage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact-us.js"
import returnHome from "./return-home.js"
import "./styles.css";

loadPage();

const menu = document.querySelector("#menu");
menu.onclick = menuPage;

const contact = document.querySelector("#contact");
contact.onclick = contactPage;

const home = document.querySelector("#home");
home.onclick = returnHome