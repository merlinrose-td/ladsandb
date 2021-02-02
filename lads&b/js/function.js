// side menu

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
     $('.side-menu-container').show();
     $('.side-menu').animate({width:"300px"})
    });
    $('.side-menu-container').click(function(){
      $('.side-menu-container').hide();
      $('.side-menu').animate({width:"0px"})
    })
  });


  // owl-carousel

  function owl(parent,items,center,loop,margin,nav,prev,next,responsive,item1,item2,item3,item4,auto,autotime,play,stop){
    $(parent+' .owl-carousel').owlCarousel({
      items:items,
      center: center,
      loop:loop,
      margin:margin,
      nav:nav,
      navText:prev,next,
      responsiveClass: responsive,
      responsive: {
         320:{
           items:item1
        },
        600:{
          items:item2
        },
        768:{
          items:item3
        },
        992:{
          items:item4
        }
    },
    autoplay:auto,
    autoplayTimeout:autotime,
    });
  }

 

  // slidedown

  function slidedown(flip,panel){
    $(document).on('click', flip, function() {
     $(this).next(panel).slideDown();
     $(panel).not($(this).next(panel)).slideUp(); 
    });
  }

  

// pop up

function popeup(imagename,hide,close){
  $(imagename).click(function(){
  $(this).next(hide).fadeIn();  
});
  $(close).click(function(){
  $(this).parent().parent().fadeOut();
  });
}

// general functions end

   // faq blog 
 
   $('.topics').on('click',function(){
    if ($(window).width() <=768) {
 
   $('.slider-contents').slideToggle();
 }
  });
  $('.panel .list-group-item').click(function(){
   if ($(window).width() <=768) {
  $('.slider-contents').slideUp();
   }
 });