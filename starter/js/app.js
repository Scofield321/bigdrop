const getElement = (selector)=>{
  const element = document.querySelector(selector)
  if(element) return element
  throw Error(
    `please there is no such ${selector} class`
  )
}
const links = getElement('.nav-links');
const navBtnDom = getElement('.nav-btn');
// adding the event loistener to the buton
navBtnDom.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
}) 

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear;


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hero");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    
  }
  slides[slideIndex - 1].classList.add("active");
};

var interval = setInterval(function() {
  plusSlides(1)
}, 3000);