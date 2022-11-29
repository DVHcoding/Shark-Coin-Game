'use strict'


/**
 * navbar toggle 
 */


const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElems = [menuClose, menuOpen, overlay];

for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}


const header = document.querySelector("[data-header]");
const goTopbtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopbtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopbtn.classList.remove("active");
    }
});




const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));

  const totalSliderItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {

    currentSlidePos++;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    if (currentSlidePos >= totalSliderItems) sliderNextBtn.setAttribute("disabled", "");
    sliderPrevBtn.removeAttribute("disabled");

  }

  sliderNextBtn.addEventListener("click", slideNext);
 
  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {

    currentSlidePos--;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");
    sliderNextBtn.removeAttribute("disabled");

  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSliderItems <= 0;
  if (dontHaveExtraItem) sliderNextBtn.setAttribute("disabled", "");

  sliderPrevBtn.setAttribute("disabled", "");

}

for (let i = 0, len = sliders.length; i < len; i++) { sliderInit(sliders[i]); }

