$(document).ready(function(){
  $.backstretch('../assets/img/background-4.jpg', {speed: 1000});
  $('.cover-pic').backstretch([
    '../assets/img/img-1.jpg',
    '../assets/img/img-2.jpg', 
    '../assets/img/img-3.jpg',
    '../assets/img/img-4.jpg',
    '../assets/img/img-5.jpg',
    '../assets/img/img-6.jpg',
    '../assets/img/img-7.jpg',
    '../assets/img/img-8.jpg'
    ], {duration: 2500, fade: 1500});

  $('#new-micropost textarea').autosize();

});