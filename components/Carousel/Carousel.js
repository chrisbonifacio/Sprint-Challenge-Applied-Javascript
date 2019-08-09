/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const photoArray = ["../../assets/carousel/computer.jpeg", "../../assets/carousel/mountains.jpeg", "../../assets/carousel/trees.jpeg", "../../assets/carousel/turntable.jpeg"];

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.append(Carousel(photoArray));

function Carousel(photos) {
  // Elements
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");

  const photo = document.createElement("img");


  photos.forEach(item => {
    carousel.append(photo);
  });

  // Structure
  carousel.append(leftButton);
  carousel.append(rightButton);

  let currentIndex = 0;
  photo.src = photos[currentIndex];

  // Events
  leftButton.addEventListener('click', event => {
    photo.src = photos[currentIndex -= 1];
    photo.style.display = "block";
  });

  rightButton.addEventListener('click', event => {
    photo.src = photos[currentIndex += 1];
    photo.style.display = "block";
  });

  return carousel;
}