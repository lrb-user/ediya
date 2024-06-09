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

    // 음료 이름 클릭시 해당 섹션으로 스크롤 이동
    let drink_o_top = $('.coffee_box_title').offset().top - $('.h_bot_nav').height();
    // console.log(ddrink_o_top)
    let cold_o_top = $('.cold_box').offset().top - $('.h_bot_nav').height();
    let tea_o_top = $('.blandding_box').offset().top - $('.h_top').height();
    let milk_o_top = $('.milk_box').offset().top - $('.h_top').height();
    let flatccino_o_top = $('.flatccino_box').offset().top - $('.h_top').height();
    let scroll_timer = 1000;

    $('.li_drink').click(function(){
        $("html,body").animate({
            scrollTop:drink_o_top
        },scroll_timer)
    })
    $('.li_cold').click(function(){
        console.log("콜드브루 클릭")
        $("html,body").animate({
            scrollTop:cold_o_top
        },scroll_timer)
    })
    $('.li_tea').click(function(){
        $("html,body").animate({
            scrollTop:tea_o_top
        },scroll_timer)
    })
    $('.li_milk').click(function(){
        $("html,body").animate({
            scrollTop:milk_o_top
        },scroll_timer)
    })
    $('.li_flatccino').click(function(){
        $("html,body").animate({
            scrollTop:flatccino_o_top
        },scroll_timer)
    })

    // 추천음료 
    let drink_count = $('.drink_recommend_item_best li').length;
    console.log(drink_count);
    let drink_index_no = 0;
    let drink_timer = 1000;
    let drink_item_width = $('.drink_recommend_item_best li').outerWidth();
    let drink_auto_interval = "";
    console.log(drink_item_width)

    for(let i =0; i < drink_count; i++){
        $('.drink_recommend_item_best li').eq(i).css({left: i* drink_item_width})
    }
    

    $('.drink_btn_R').click(function(){
        console.log("확인");
        btn_init();
        $('.drink_recommend_item_best li').animate({
            left:"-="+drink_item_width
        },drink_timer);

        $('.drink_recommend_item_best li').eq(drink_index_no % drink_count).animate({
            left:drink_item_width * ( drink_count -1 )
        },0)
        drink_index_no++;
    })
    $('.drink_btn_L').click(function(){
        console.log("확인");
        btn_init();
        drink_index_no--;
        $('.drink_recommend_item_best li').eq(drink_index_no % drink_count).animate({
            left:-drink_item_width
        },0);

        $('.drink_recommend_item_best li').animate({
            left:"+="+drink_item_width
        },drink_timer)
        
    })

    function btn_init(){
        $('.drink_btn').css({pointerEvents:"none"})
        setTimeout(function(){
            $('.drink_btn').css({pointerEvents:"auto"})
        },drink_timer);
    }

    function drink_auto_slide(){
        drink_auto_interval = setInterval(function(){
            $('.drink_btn_R').trigger('click');
        },drink_timer*3);
    }

    $('.drink_recommend_item_best').hover(function(){
        clearInterval(drink_auto_interval);
    },function(){
        drink_auto_slide();
    })

    drink_auto_slide();
    // 탑 버튼 클릭시 스크롤 부드럽게 맨위로 이동
    // $('a').click(function(){
    //     event.preventDefault();
    // })
    $('.top_btn').click(function(){            
        $('body,html').animate({
            scrollTop:0
        },drink_timer);
    })

})