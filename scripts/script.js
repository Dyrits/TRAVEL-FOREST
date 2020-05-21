function enterSite() {
  // The #landing section is pushed out of the screen:
  $("#landing").css("transform", "translate(-200vw)");
  // The #dimmed-background is set to visible and come in the screen:
  $("#dimmed-background").css("visibility", "visible");
  $("#dimmed-background").css("transform", "translate(0)");
  // The #full-site is displayed:
  $("#full-site").css("visibility", "visible");
  $("#full-site").css("overflow", "visible");
  $("#full-site").css("max-height", "auto");
  $("#above-fold").css("opacity", "1");
  $("#register-side-bar").css("transform", "translate(0)");
}

$("#register-side-bar").mouseenter(function() {
  openForm();
})

$("#register-side-bar").mouseleave(function() {
  closeForm();
})

$("#empty-side").mouseenter(function() {
  closeForm();
})

function openForm() {
  $("#register-side-bar").css("transform", "translate(-650px)");
  $("#register-side-bar").css("transition-delay", "0s");
  $("#register-side-bar").css("z-index", "20");
  $("#call-number").css("opacity", "0")
  $("#register").css("opacity", "0")
}

function closeForm() {
  $("#register-side-bar").css("transform", "translate(0)");
  $("#register-side-bar").css("z-index", "0");
  $("#call-number").css("opacity", "1")
  $("#register").css("opacity", "1")
}