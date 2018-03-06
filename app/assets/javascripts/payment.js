var atmBcaListener = function() {
  $("#atm-bca").on("click", function() {
    $("#atm-bca-instructions").slideToggle();
  });
};

var klikBcaListener = function() {
  $("#klikbca").on("click", function() {
    $("#klikbca-instructions").slideToggle();
  });
};

var mBcaListener = function() {
  $("#m-bca").on("click", function() {
    $("#m-bca-instructions").slideToggle();
  });
};

$(document).ready(function() {
  atmBcaListener();
  klikBcaListener();
  mBcaListener();
});
