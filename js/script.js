$(document).ready(function(){ //시작
  
  // 해더 스크롤 시
  var offsetH = $("header").offset();
  $(window).scroll(function(){

    if($(document).scrollTop() > offsetH.top){
      $("header").addClass("fixed");
    }else{
      $("header").removeClass("fixed");
    }
  });

    // 슬라이드
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        cssMode: true,
        navigation: {
          nextEl: ".mySwiper .swiper-button-next",
          prevEl: ".mySwiper .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        
        
        
      });

      // 무비차트
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: "#moviechart .swiper-button-next",
          prevEl: "#moviechart .swiper-button-prev",
        },
      });

      // 예고편
      var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".mySwiper3 .swiper-button-next",
          prevEl: ".mySwiper3 .swiper-button-prev",
        },
        // pagination: {
        //   el: ".swiper-pagination3",
        //   clickable: true,
        // },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      


}); //끝