$(document).ready(function () {
    $("#banner").owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      autoplay:true,
    });
    new WOW().init();
  
    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
      new WOW().init();
    })
  
    $('#starter').owlCarousel({
      items:1,
      dots:true,
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      
      
  })
  $('#part').owlCarousel({
    items:4,
    dots:false,
    loop:true,
    nav:false,
    autoplay:true,
  })
  $('#white').owlCarousel({
    items:1,
    dots:true,
    loop:true,
    nav:true,
    autoplay:true,
  })
  $('#team').owlCarousel({
    items:3,
    dots:false,
    loop:true,
    // dotsEach:true,
    autoplay:true,
  })

//preloader js
$('.preloader').hide()
// $('main').hide()
// setTimeout(function(){
//   $('.preloader').fadeOut(750);
//   $('main').show()
// },3000)

  $('.to_top').hide()
  $(window).scroll(function(){
    h = $(window).scrollTop();
    if(h > 150)
    {
      $('header').addClass('top_fixed');
      $('.to_top').fadeIn(500)
      // $('.logo > a > img').attr('src','images/dark.png')
    }
    else{
      $('header').removeClass('top_fixed');
      $('.to_top').fadeOut(500)
      // $('.logo > a > img').attr('src','images/asset 2.png')
    }
  })
  $('.to_top').click(function(){
    $(window).scrollTop(0);
  })


    // // init Isotope
    // var $grid = $('.grid').isotope({
    //      // options
    // });
    // // filter items on button click
    // $('.filter-button-group').on('click', 'a', function () {
    //      var filterValue = $(this).attr('a');
    //      $grid.isotope({ filter: filterValue });
    // });

    // fancybox js
    // $("a.layer").fancybox({
    //      'transitionIn': 'elastic',
    //      'transitionOut': 'elastic',
    //      'speedIn': 600,
    //      'speedOut': 200,
    //      'overlayShow': false,
    //      'titlePosition': 'inside',
    //      'titleShow': true,
    // });

    $('.toggle_btn').click(function(){
      $('.main-menu').toggle()
    })
})
