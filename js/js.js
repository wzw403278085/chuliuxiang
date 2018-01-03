$(document).ready(function(){
    var height=$(".header img").height();
    var nav=$(".navbar");
    var sc=$(document);
    var section=$("section");
    $(window).scroll(function(){
        if(sc.scrollTop()>=height){
            nav.addClass("fixNav");
        }else{
            nav.removeClass("fixNav");
        }
        if (sc.scrollTop()<=section.eq(0).offset().top){
            $(".navbar ul li").eq(0).addClass("cur").siblings().removeClass("cur");
        } else if (sc.scrollTop()<=section.eq(1).offset().top){
            $(".navbar ul li").eq(1).addClass("cur").siblings().removeClass("cur");
        } else if (sc.scrollTop()<=section.eq(2).offset().top){
            $(".navbar ul li").eq(2).addClass("cur").siblings().removeClass("cur");
        } else if (sc.scrollTop()<=section.eq(3).offset().top){
            $(".navbar ul  li").eq(3).addClass("cur").siblings().removeClass("cur");
        } else if (sc.scrollTop()<=section.eq(4).offset().top){
            $(".navbar ul  li").eq(4).addClass("cur").siblings().removeClass("cur");
        } else if (sc.scrollTop()<=section.eq(5).offset().top){
            $(".navbar ul  li").eq(5).addClass("cur").siblings().removeClass("cur");
        }
        console.log(sc.scrollTop())
    });


    var W=$(window).width();
    if (W<761){

        $(".navbar-nav.navbar-right li").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parents("#bs-example-navbar-collapse-1").removeClass("in");
            $(this).parents("#bs-example-navbar-collapse-1").attr("aria-expanded","false");
        });
    }
}) ;