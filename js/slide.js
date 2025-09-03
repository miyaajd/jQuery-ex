$(function () {
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  console.log(slideWidth);
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    });
  };
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
});
