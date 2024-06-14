$(document).ready(function() {
  const header = $('.header');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});

//~ window.addEventListener('scroll', function() {
  //~ const header = document.querySelector('.header');
  //~ if (window.scrollY > 0) {
    //~ header.classList.add('fixed');
  //~ } else {
    //~ header.classList.remove('fixed');
  //~ }
//~ });
