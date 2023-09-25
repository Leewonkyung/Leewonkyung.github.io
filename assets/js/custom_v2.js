$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });

  $(window).resize(function(){      
      if (window.matchMedia("(max-width: 992px)").matches) {
        $('.back-to-top').click( function() {    
          $("html ,body").scrollTop(0);
        });
      }else{
        $('.back-to-top').click( function() {   
          location.reload();
        });
      }
  }).trigger("resize");

});

var scroll = function(){
    
  var $nav = null,
      $cnt = null,
      moveCnt = null,
      moveIndex = 0,
      moveCntTop = 0,
      winH = 0,
      winW = 0,
      time = false; // 새로 만든 변수

  $(document).ready(function(){
      init();
      initEvent();
  });
  
  var init = function(){
      $cnt = $(".content");
      $nav = $(".navbar a");
  };
  
  var initEvent = function(){
      $("html ,body").scrollTop(0);
      winResize();
      $(window).resize(function(){
          winResize();
      });
      $nav.on("click", function(){
          moveIndex = $(this).parent("li").index();
          moving(moveIndex);
          return false;
      });
      $cnt.on("mousewheel", function(e){
        winW = $(window).width();
          if(time === false && winW > 991){ // time 변수가 펄스일때만 휠 이벤트 실행
            wheel(e);
          }
      });
  };
      
  var winResize = function(){
      winH = $(window).height();
      $cnt.children("section").height(winH);
      $("html ,body").scrollTop(moveIndex.scrollTop);
  };
  
  var wheel = function(e){
      if(e.originalEvent.wheelDelta < 0){
          if(moveIndex < $nav.length - 1){
              moveIndex += 1;
              moving(moveIndex);
          };
      }else{
          if(moveIndex > 0){
              moveIndex -= 1;
              moving(moveIndex);
          };
      };
  };
  
  var moving = function(index){
      time = true // 휠 이벤트가 실행 동시에 true로 변경
      moveCnt = $cnt.children("section").eq(index);
      moveCntTop = moveCnt.offset().top;
      $("html ,body").stop().animate({
          scrollTop: moveCntTop
      }, 500, function(){
        time = false; // 휠 이벤트가 끝나면 false로 변경
      });
      $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
  };
  
};

scroll();
