import { navLinks } from ".";

let showMenu = function (e) {
  navLinks.classList.remove("hidden");
};

let hideMenu = function (e) {
  navLinks.classList.add("hidden");
};

export { showMenu, hideMenu };
