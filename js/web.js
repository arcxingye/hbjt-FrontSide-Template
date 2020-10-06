// JavaScript Document

jQuery(document).ready(function() {
    //niceScroll
    $('html').niceScroll({
        cursorcolor: "#aaa",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "8px", //像素光标的宽度
        cursorborder: "0", //     游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: false //是否隐藏滚动条
    });

    /*header*/
    jQuery(window).scroll(function() {
         if(jQuery(window).scrollTop() >= 10){
             jQuery("header").addClass("header_scr header_index");
         }else{
            jQuery("header").removeClass("header_scr header_index");
         }
     });

    //pad&phone ==activator_phone
    $(".menu-activator").click(function(){
        $(".nav_phone").toggleClass("nav_active");
        $(".nav_phone_bg").fadeToggle();
        $(this).toggleClass("active");
        //$("html,body").css({"overflow":"hidden","height":"100%"});
    });
    $(".nav_phone_bg").click(function(){
        $(".nav_phone").removeClass("nav_active");
        $(".nav_phone_bg").fadeOut();
        $(".menu-activator").removeClass("active");
        //$("html,body").css({"overflow":"visible","height":"auto"});
    });



    //wow
    $(".pro_img").addClass("wow owl-fadeUp-in");
    $(".banner_warp").addClass("wow fadeIn");


    //back_top
   /* jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() >= 200){
            jQuery('.back_top').fadeIn(300);
        }else{
            jQuery('.back_top').fadeOut(300);
        }
    });*/
    jQuery('.back_top').click(function(){
        jQuery('html,body').animate({scrollTop: '0'}, 800);

    });

});