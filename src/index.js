import "./style.css";
import "./menu.svg";
import { showMenu, hideMenu } from "./dropdownMenu.js";

const navLinks = document.querySelector(".nav-links");
navLinks.addEventListener("mouseleave", hideMenu);
navLinks.addEventListener("mouseover", showMenu);

const navMenuBtn = document.querySelector(".nav-icon");
navMenuBtn.addEventListener("mouseover", showMenu);
navMenuBtn.addEventListener("mouseleave", hideMenu);

export { navLinks };
