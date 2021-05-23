$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
    $('.header .navbar ul li a').css({'color': '#000'});
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#CBC3E3','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      $('.header .navbar ul li a').css({'color': '#000'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
      $('.header .navbar ul li a').css({'color': '#fff'});
    }
  });

});

// OVERLAY

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
}
  
function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}

function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
}
  
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}

function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
}
  
function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}

function openNav4() {
    document.getElementById("myNav4").style.width = "100%";
}
  
function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}

function openNav5() {
    document.getElementById("myNav5").style.width = "100%";
}
  
function closeNav5() {
  document.getElementById("myNav5").style.width = "0%";
}
