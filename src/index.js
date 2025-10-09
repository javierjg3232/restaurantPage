import loadMenuPage from "./menuPage/loadMenuPage";
import loadHomePage from "./homePage/loadHomePage";
import loadAboutPage from "./aboutPage/loadAboutPage";
import "./styles.css";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", loadHomePage);
menuBtn.addEventListener("click", loadMenuPage);
aboutBtn.addEventListener("click", loadAboutPage);


loadHomePage();


console.log("Webpack Configured");