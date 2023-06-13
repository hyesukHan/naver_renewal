const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3.2,
  spaceBetween: 15,
  loop: true,


});

$(function(){
  
  //메뉴버튼 모달

  $(".btn-box .menu-btn").click(function(){
    $(".menu-modal,.triangle").fadeToggle(0);
  });

  //검색창모달

  $("header .search-box .toogle-btn").click(function(){
    $(".search-modal").fadeIn(0);
  });
  $("header .search-box .search-modal .input-box .toogle-btn").click(function(){
    $(".search-modal").fadeOut(0);
  });

  //tap 메뉴

  $(".news-area .header-tap a").on("click", function(){

    const num = $(".news-area .header-tap a").index($(this));

    $(".news-area .header-tap a").removeClass("on");
    $(".news-area .news-area-content-wrap div").removeClass("on");

    $(".news-area .header-tap a").eq(num).addClass("on");
    if(num == 0){
      $("main .left-column .news-area .content-wrap").addClass("on");
    }else if(num == 1){
      $("main .left-column .news-area .press-edit-wrap").addClass("on");
    }
  });

  //widget clear

    $(".widget-board .widget-wrap  .widget-popup .clear-btn").click(function(){
    $(".widget-board .widget-wrap  .widget-popup").fadeOut(0);
  });

});
