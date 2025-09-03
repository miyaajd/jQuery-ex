$(function () {
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  console.log(slideWidth);
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"))
      $(this).css({marginLeft : 0})
    });
  };
  setInterval(moveSlide, 3000);
});
