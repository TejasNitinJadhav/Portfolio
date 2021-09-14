var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("aboutleft");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const inputfields=document.querySelectorAll("input");
const textareafields= document.querySelectorAll("textarea");
const btn=document.getElementsByClassName("button");

const userdata=[];
console.log(userdata);

btn.onclick=()=>{

    let name=inputfields[0].value;
    let email=inputfields[1].value;
    let subject=textareafields[0].value;
    userdata.push({name, email, subject});
    console.log(userdata);
}