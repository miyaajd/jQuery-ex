$(function (){
    // console.log("check");
    // $("#openBtn").click(function(){
    //     $("#popup").show(200)
    // })
    // $("#closeBtn").click(function(){
    //     $("#popup").hide(200)
    // })
    // $("#openBtn").click(function(){
    //     $("#popup").fadeIn(300)
    // })
    $("#openBtn").click(function(){
        $("#popup").toggle(200)
    })
    $("#closeBtn").click(function(){
        $("#popup").fadeOut(300)
    })
})