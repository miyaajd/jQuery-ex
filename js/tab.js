$(function () {
  $(".tabMenu > li > a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
//   modal
$(".notice-list li:first-child").click(function(){
    $("#modal").addClass("active")
})
$(".modal-btn").click(function(){
    $("#modal").removeClass("active")
})
});
