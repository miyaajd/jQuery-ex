$(function () {
  // horizontal slide
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  console.log(slideWidth);
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    });
  };
  //   vertical slide
  setInterval(moveSlide, 4000);
  const verSlideList = $(".slide-list-ver");
  const slideHeight = $(".slide-list-ver li").height();
  const verMoveSlide = () => {
    verSlideList.animate({ marginTop: -slideHeight }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginTop: 0 });
    });
  };
  setInterval(verMoveSlide, 4000);
  //   fade in / out
  const fadeSlide = $(".slide-fade li");
  let firstIndex = 0; // const 로는 재할당이 안되기 때문에 let 을 써야함
  const moveFade = () => {
    let next = (firstIndex + 1) % fadeSlide.length;
    // console.log(next);
    fadeSlide.eq(firstIndex).fadeOut(1000);
    // console.log(fadeSlide.eq(firstIndex));
    fadeSlide.eq(next).fadeIn(1000);
    firstIndex = next; //재할당 해야해서 let 사용
  };
  fadeSlide.hide().eq(0).show()
  setInterval(moveFade, 4000);
});
