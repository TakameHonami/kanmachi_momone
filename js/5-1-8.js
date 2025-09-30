$(function () {
  var header = $(".page-header");

  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();

    if (scroll > 50) {
      header.addClass("small");
    } else {
      header.removeClass("small");
    }
  });
});
