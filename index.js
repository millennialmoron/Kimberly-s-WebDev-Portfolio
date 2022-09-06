alert("hey bitch");

var scale = chroma
  .scale(["#004097", "#FD386C"])
  .domain([0, $(document).height()]);
$(window).on("scroll", function () {
  $("body").css("background-color", scale(window.pageYOffset));
});

//figure out why background isn't working. needs listener? needs an ass kicking? needs me to throw laptop from balcony?...the possibilities are endless.
