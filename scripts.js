// For the mobile-phone layout (navbar {side bar})
var navLinks = document.getElementById("navLinks");
function showmenu() {
  navLinks.style.right = "20px";
  navLinks.style.top = "20px";
  navLinks.style.display = block;
}
function hidemenu() {
  navLinks.style.right = "20px";
  navLinks.style.top = "-10000px";
  navLinks.style.display = none;
}
// For the scroll Menu active part code:
$(document).ready(function (e) {
  $("a[href*=\\#]").bind("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
        function () {
          location.hash = target;
        }
      );
    return false;
  });
});
$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
