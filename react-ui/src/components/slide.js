import React from 'react';
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.querySelectorAll(".slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    

//   slides[slideIndex-1].style.display = "block";  

//   setTimeout(showSlides, 8000); 
// } 


export default function showSlides() {
  var slideIndex = 0
  var i;
  var slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 8000);
}