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

var mHtml = $("html");
var page = 1;
var windowWidth = $(window).width();

window.addEventListener("wheel", function(e){
  if(windowWidth > 991) {
    e.preventDefault();
  }
},{passive : false});


mHtml.animate({scrollTop : 0}, 10);
history.scrollRestoration = "manual" //새로고침 시 초기상태로 돌리기 / manual = 복원안함, auto = 복원

// 휠 이벤트 처리
$(window).on("wheel", function(e) {
  // 스크롤 효과가 쌓이지 않도록 스크롤이 진행되는 동안 반생하는 wheel 이벤트는 무시
  if(windowWidth > 991) {
    if(mHtml.is(":animated")) return; 
    if(e.originalEvent.deltaY > 0) {
        if(page == 5) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
  }
})