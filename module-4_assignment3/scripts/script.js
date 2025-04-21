$(document).ready(function () {
  $("#add-game").click(function () {
    var gameLine = $("#title").val();
    gameLine = gameLine + ", published by " + $("#publisher").val();
    gameLine = gameLine + " is a(n) " + $("#genre").val();
    gameLine = gameLine + " released in " + $("#release-year").val();
    gameLine = gameLine + ".<br>Play it again? " + $("#replayable").val();
    gameLine = gameLine + "<br>"

    $("#games").append(gameLine);
    $("#title").val("");
    $("#publisher").val("");
    $("#genre").val("");
    $("#release-year").val("");
    $("#replayable").val("");
  })

  $("#light-mode").click(function () {
    $("header, footer").addClass("light");
    $("header, footer").removeClass("dark");
    $("div").addClass("light-div");
    $("div").removeClass("dark-div");
  })
  $("#dark-mode").click(function () {
    $("header, footer").addClass("dark");
    $("header, footer").removeClass("light");
    $("div").addClass("dark-div");
    $("div").removeClass("light-div");
  })

  $("#larger").click(function () {

    var currentSize = parseInt($("#font-change").css('font-size'));
    currentSize += 3;
    var setFont = currentSize += "px";
    $("#font-change").css("fontSize", setFont);
  })
  $("#smaller").click(function () {

    var currentSize = parseInt($("#font-change").css('font-size'));
    currentSize -= 3;
    var setFont = currentSize += "px";
    $("#font-change").css("fontSize", setFont);
  })
});