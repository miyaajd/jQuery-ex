$(function () { 

  // slideDown() / slideUp()
  // console.log("start");
  //   $(".menu > li").hover(
  //     function () {
  //       // console.log("hover");
  //       // console.log($(this));
  //       $(this).find(".submenu").stop().slideDown(300);
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().slideUp(300);
  //     }
  //   );

  // fadeIn() / fadeOut()
  //   $(".menu > li").hover(function(){
  // $(this).find(".submenu").stop().fadeIn(500)
  //   }, function(){
  // $(this).find(".submenu").stop().fadeOut(500)
  //   })

  //서브메뉴 한꺼번에 열림
//   $(".menu").hover(function(){
//     $(".submenu").stop().slideDown(300)
//   },function(){
//     $(".submenu").stop().slideUp(300)
//   })
//   
  $(".menu").hover(function(){
    $(".submenu").stop().fadeIn(300)
  },function(){
    $(".submenu").stop().fadeOut(300)
  })
});
