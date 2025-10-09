import loadMenuPage from "./loadMenuPage";
import loadHomePage from "./loadHomePage";
import loadAboutPage from "./loadAboutPage";
import "./styles.css";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", loadHomePage);
menuBtn.addEventListener("click", loadMenuPage);
aboutBtn.addEventListener("click", loadAboutPage);


loadHomePage();


console.log("Webpack Configured");