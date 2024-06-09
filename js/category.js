$(document).ready(function(){
    let header = $('.header');
    let h_top = $('.h_top');
    let h_bot_fixed = $('.h_bot_fixed')
    let h_bot = $('.h_bot')
    let h_bot_o_top = $('.h_bot').offset().top;
    let s_top = 0;
    $(window).scroll(function(){
        s_top = $(window).scrollTop();
        if(s_top >= h_bot_o_top){
            $('.h_bot_fixed').css({
                position:"fixed",
                top:0,
                left:0,
                // margin:'0 auto',
                zIndex: '999999',
                background:'white',
                // justifyContent: "center"
            })
            $('.container').css({
                marginTop: `${h_bot.height()}`
                // marginTop: "h_bot.height()"
            })
            $('.nav').css({
                top:h_bot.height()
            })
        }
        else{
            $('.h_bot_fixed').css({
                position:'static',
                // justifyContent: "space-between"
            })
            $('.container').css({
                marginTop: 0
            })
            $('.nav').css({
                position: 'fixed',
                top: h_top.height() + h_bot.height() - s_top,
                left: 0,
                zIndex: 9999
            })
        }
    })

    let isEventOn = false;
    // nav마우스 이벤트
    $('.h_bot_nav').hover(function(){
        if(isEventOn) return;
        isEventOn = true;
        let second = 200;
        $('.nav').slideToggle(second);
        setTimeout(() => {
            isEventOn = false;
        }, second);
        
    })
 // search클릭시 네모창으로 변경
$('.search_icon a').click(function(){
    $('.search_icon').css({display:"none"});
    $('.icon_text').css({display:"block"})
})

// 메뉴 클릭시 해당 섹션으로 스크롤 이동
let drink_o_top = $('.sec_drink').offset().top - $('.h_bot_nav').height();
console.log(drink_o_top);
let bakery_o_top = $('.sec_bakery').offset().top - $('.h_bot_nav').height();
let coffee_o_top = $('.sec_coffee').offset().top - $('.h_bot_nav').height();
let cap_o_top = $('.sec_cap').offset().top - $('.h_bot_nav').height();
let good_o_top = $('.sec_good').offset().top - $('.h_bot_nav').height();
let menu_timer = 1000;
$('.s_drink').click(function(){
    $('body,html').animate({
        scrollTop:drink_o_top
    },menu_timer);
})  
$('.s_bakery').click(function(){
    $('body,html').animate({
        scrollTop:bakery_o_top
    },menu_timer);
}) 
$('.s_coffee').click(function(){
    $('body,html').animate({
        scrollTop:coffee_o_top
    },menu_timer);
}) 
$('.s_cap').click(function(){
    $('body,html').animate({
        scrollTop:cap_o_top
    },menu_timer);
}) 
$('.s_good').click(function(){
    $('body,html').animate({
        scrollTop:good_o_top
    },menu_timer);
}) 
$('.top_btn').click(function(){
    $('body,html').animate({
        scrollTop:0
    },menu_timer);
})



})