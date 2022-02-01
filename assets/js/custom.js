$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });

  // var mainBg = $("#hero").css("background")
  // setTimeout(function(){
  //   $("#hero").css("background","url(https://leewonkyung.github.io/assets/img/sample-bg.jpg)")
  // },3000)

  var mainBg = $('.main-bg-area');
  setTimeout(function(){
    mainBg.animate({opacity:"0.5"},1000);
  },3000)
});
