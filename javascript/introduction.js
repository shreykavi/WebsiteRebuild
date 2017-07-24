$(document).ready(function() {
    //Initializations
    var windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
    windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    $('#sky').css({fill:'#99ddff'});

    //handling window resizes
    $(window).on('resize',function (){
        windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        console.log("SIZE CHANGED:\n screen-width: " +screen.width + "\n window-width: " + window.innerWidth);

        $('#cloud-one,#cloud-one-shadow').velocity("stop");
        $('#cloud-two,#cloud-two-shadow').velocity("stop");
        cloudAnimations(windowWidth);
    });

    //scroll to top and lock scrolling for intro
    $(this).scrollTop(0);
    $('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () { window.scrollTo(0,0); });
     setTimeout(function(){ //unlock
         $(document).unbind('scroll');
         $('body').css({'overflow':'visible'});
     },3100);

    //introductory animations
    $('#mountain-two-light,#mountain-three-light,#mountain-four-light').velocity(
      "fadeIn", { duration: 3000 }
    );
    $('#sun').velocity(
      { translateX : -500 },
      { duration: 1, loop: false }
    ).velocity(
      { translateX : 50 },
      { duration: 2500, loop: false }
    );
    $('#title').velocity(
      { translateY : -500 },
      { duration: 1, loop: false }
    ).velocity(
      { translateY : 0 },
      { duration: 1000, loop: false }
    );
    $('#desc').velocity(
      { translateY : 500 },
      { duration: 1, loop: false }
    ).velocity(
      { translateY : 0 },
      { duration: 1000, loop: false }
    );

   cloudAnimations(windowWidth);

    //parallax mountains effect
    $(window).scroll(function(){
          var scrollTop = $(this).scrollTop();
          if(scrollTop >= windowHeight/5){
             $('#sky').css({fill:'#8FD1F2'});
           }
           else{
              $('#sky').css({fill:'#99ddff'});
            }
           if(scrollTop >= windowHeight/3){
              $('#sky').css({fill:'#8AC2DE'});
            }
           if(scrollTop >= windowHeight/2.5){
              $('#sky').css({fill:'#86A6CF'});
            }
           if(scrollTop >= windowHeight/2){
              $('#sky').css({fill:'#6993C9'});
            }
           if(scrollTop >= windowHeight/1.5){
              $('#sky').css({fill:'#446896'});
            }
            if(scrollTop >= windowHeight/1.15){
               $('#sky').css({fill:'#243C5C'});
             }


            $('#sun').velocity(
              { translateY : scrollTop*2 },
              { duration: 1, loop: false }
            );
            $('#mountain-four, #mountain-four-light').velocity(
              { translateY : scrollTop/1.25 },
              { duration: 1, loop: false }
            );
            $('#mountain-three, #mountain-three-light').velocity(
              { translateY : scrollTop/1.75 },
              { duration: 1, loop: false }
            );
            $('#mountain-two, #mountain-two-light').velocity(
              { translateY : scrollTop/2.5 },
              { duration: 1, loop: false }
            );
            $('#mountain-one').velocity(
              { translateY : scrollTop/7 },
              { duration: 1, loop: false }
          );
    });
  });

  function cloudAnimations(cloudPathSize) {
          //cloud animations
            for(var i = 0;i<20;i++){
                    $('#cloud-one,#cloud-one-shadow').velocity(
                      { translateX : ( cloudPathSize * 2.5 ) },
                      { duration: 33000, loop: false }
                    ).velocity(
                      { translateX : 0 },
                      { duration: 1, loop: false }
                    );
                    $('#cloud-two,#cloud-two-shadow').velocity(
                      { translateX : ( cloudPathSize * 2.75 ) },
                      { duration: 28500, loop: false }
                    ).velocity(
                      { translateX : 0 },
                      { duration: 1, loop: false }
                    );
            }
        }
