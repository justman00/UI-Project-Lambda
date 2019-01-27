class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = this.carousel.querySelector(".left-button");
    this.right = this.carousel.querySelector(".right-button");

    this.imgs = Array.from(this.carousel.querySelectorAll("img"));
    this.currIndex = this.imgs.indexOf(this.carousel.querySelector(".current"));

    this.left.addEventListener("click", () => {
      this.imgs[this.currIndex].classList.remove("current");
      let nextIndex = this.currIndex - 1;
      console.log(nextIndex);
      // last index of an array
      let lastIndex = this.imgs.length - 1;
      console.log(lastIndex);
      if (nextIndex < 0) {
        this.imgs[lastIndex].classList.add("current");
        this.currIndex = lastIndex;
      } else {
        this.imgs[nextIndex].classList.add("current");
        this.currIndex = nextIndex;
      }
    });

    this.right.addEventListener("click", () => {
      this.imgs[this.currIndex].classList.remove("current");
      let nextIndex = this.currIndex + 1;
      console.log(nextIndex);
      if (nextIndex > this.imgs.length - 1) {
        this.imgs[0].classList.add("current");
        this.currIndex = 0;
      } else {
        this.imgs[nextIndex].classList.add("current");
        this.currIndex = nextIndex;
      }
    });
  }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
