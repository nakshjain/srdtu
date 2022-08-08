//ABOUT-US
const firstimg = document.querySelector(".slide img");
const allimg = document.querySelectorAll(".slide img");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
let counter = 0;
firstimg.classList.remove("slide-1");
nextbtn.addEventListener("click", () => {
  if (counter === 0) {
    allimg[counter].classList.add("slide-1");
    allimg[counter + 1].classList.remove("slide-2");
    counter++;
  } else if (counter === 1) {
    allimg[counter].classList.add("slide-2");
    allimg[counter + 1].classList.remove("slide-3");
    counter++;
  } else if (counter === 2) {
    allimg[counter].classList.add("slide-3");
    allimg[counter - 2].classList.remove("slide-1");
    counter = counter - 2;
  }
});
prevbtn.addEventListener("click", () => {
  if (counter === 0) {
    return;
  } else if (counter === 1) {
    allimg[counter].classList.add("slide-2");
    allimg[counter - 1].classList.remove("slide-1");
    counter--;
  } else if (counter === 2) {
    allimg[counter].classList.add("slide-3");
    allimg[counter - 1].classList.remove("slide-2");
    counter = counter - 1;
  }
});
