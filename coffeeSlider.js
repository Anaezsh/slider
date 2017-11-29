$(document).ready(function() {
  // переменная, которая показывает, что идет анимация
  var isGoing = false;
  // позиционирование
  $("li:last").prependTo("ul");
  // эффект нажатия для кнопок
  $(".button").bind("mousedown",function() {
    $(this).removeClass("up");
  });
  $(".button").bind("mouseup",function() {
    $(this).addClass("up");
  });
  // резкая смена картинки
  // $("#forward").bind("click",function() {
  //   var elem = $("li:first");
  //   $('ul').append(elem);
  // });
  // $("#back").bind("click",function() {
  //   var elem = $("li:last");
  //   $('ul').prepend(elem);
  // });
  // плавный переход
  $("#forward").bind("click",function() {
    if(isGoing){return;}
      isGoing = true;
      setTimeout(function() {
        isGoing = false;
      },300);
    $("ul").animate({"margin-left":"-194"},300,function() {
      $("li:first").appendTo("ul");
      $("ul").css("margin-left","0px")
    });
  });
  $("#back").bind("click",function() {
    if(isGoing){return;}
      isGoing = true;
      setTimeout(function() {
        isGoing = false;
      },300);
    $("ul").animate({"margin-left":"194"},300,function() {
      $("li:last").prependTo("ul");
      $("ul").css("margin-left","0px")
    });
  });
});
