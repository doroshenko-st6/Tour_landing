'use strict';

// const login = document.querySelector('#login');

// login.onclick = function() {
//     let login = prompt('login:');

//     if(login == 'admin') {
    
//       let password = prompt('password:');
    
//       if(password == 'admin') {
//         alert(`Hello, ${login} !!!`);
//       } else if ( password == null ) {
//         alert('Otmena');
//       } else if (password == '') {
//         alert('PUSTO')
//       }
//       else {
//         alert('Ne verNO!!!!!');
//       }
      
//     } else if (login == '' || null) {
//       alert('Otmena');
//     } else {
//       alert('error');
//     }
//   };


$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});


  $('.location-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });