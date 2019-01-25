// JS goes here
const burger = document.querySelector(".navigation .nav-burger img");

burger.addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  if (menu.style.opacity === "0.95") {
    menu.style.opacity = "0";
    menu.style.width = "0";
    // burger.src = "img/nav-hamburger.png";
    setTimeout(() => (burger.src = "img/nav-hamburger.png"), 400);
  } else {
    menu.style.opacity = ".95";
    menu.style.width = "100vw";
    setTimeout(() => (burger.src = "img/nav-hamburger-close.png"), 400);
  }
});

let title = document.querySelector(".secret-title").textContent;

const links = document.querySelectorAll("#menu a");
links.forEach(link => {
  link.style.color = "white";

  if (link.textContent === title) {
    link.style.color = "#353839";
    console.log("changed");
  }
});
