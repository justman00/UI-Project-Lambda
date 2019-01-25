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

class TabLink {
  constructor(element) {
    this.element = element;
    // get the data number in order to access the description afterwards
    this.data = this.element.dataset.tab;
    this.instanceDesc = document.querySelector(
      `.block-item[data-tab="${this.data}"]`
    );

    // create a new class of description
    this.description = new Description(this.instanceDesc);

    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const allLinks = document.querySelectorAll(".button");

    // making all the buttons not be selected
    allLinks.forEach(link => link.classList.remove("focused"));

    this.description.select();

    this.element.classList.add("focused");
  }
}

class Description {
  constructor(element) {
    this.element = element;
  }

  select() {
    const allDescs = document.querySelectorAll(".block-item");

    // make all of them display none
    allDescs.forEach(desc => desc.classList.remove("description-selected"));

    // give this description a block display
    this.element.classList.add("description-selected");
  }
}

const clickButtons = document.querySelectorAll(".button");
clickButtons.forEach(link => new TabLink(link));
