import loadMenuPage from "./loadMenuPage";
import initialPageLoad from "./initialPageLoad";
import loadAboutPage from "./loadAboutPage";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", initialPageLoad);
menuBtn.addEventListener("click", loadMenuPage);
aboutBtn.addEventListener("click", loadAboutPage);


initialPageLoad();


console.log("Webpack Configured");