$(document).ready(function () {
  $("button").click(function () {
    $("div").animate({ left: 400 }, 1000);
  });
  $(".element1").click(function () {
    $(this)
      .animate({ borderRadius: "50%", left: 100, top: 500 }, 1000)
      .animate({ width: "200px", left: 360 }, 1000);
  });
  $(".smile")
    .mouseenter(function () {
      $(".smile img").attr("src", "img2.jpg");
    })
    .mouseleave(function () {
      $(".smile img").attr("src", "img3.jpg");
    });
  $(".element3")
    .mouseover(function () {
      $(this).css("background-color", "#FF4500");
    })
    .mouseout(function () {
      $(this).css("background-color", "#CD5C5C");
    });
});
