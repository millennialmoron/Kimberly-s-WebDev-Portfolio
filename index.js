var scale = chroma
  .scale(["#004097", "#FD386C"])
  .domain([0, $(document).height()]);
$(window).on("scroll", function () {
  $("body").css("background-color", scale(window.pageYOffset));
});
