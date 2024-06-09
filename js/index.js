$(document).ready(function(){
    // 메인배너
    let bn_count = $('.banner').length;
    let bn_index_no = 1;
    let bn_timer = 1000;
    let bn_auto_interval ="";

    $('.slide_R').click(function(){
        btn_init_mb();

        // 들어오는 판
        $('.banner').eq(bn_index_no % bn_count).css({
            left:"100%"
        }).animate({
            left:0
        },bn_timer);

        // 나가는 판
        $('.banner').eq((bn_index_no-1) % bn_count).animate({
            left:"-100%"
        },bn_timer);

        bn_index_no++;
    })

    $('.slide_L').click(function(){
        btn_init_mb();
        // console.log("확인")
        bn_index_no--;

        $('.banner').eq((bn_index_no-1) % bn_count).css({
            left:"-100%"
        }).animate({
            left:0
        },bn_timer);

        $('.banner').eq(bn_index_no % bn_count).animate({
            left:"100%"
        },bn_timer);
    })
    function bn_auto_slide(){
        clearInterval(bn_auto_interval);
        bn_auto_interval = setInterval(function(){
            $('.slide_R').trigger('click')
        },bn_timer+1000)
    }
    bn_auto_slide();

    $('.main_banner_box').mouseenter(function(){
        clearInterval(bn_auto_interval);
    })
    $('.main_banner_box').mouseleave(function(){
        bn_auto_slide();
    })

    function btn_init_mb(){
        $('.btn_mb').css({pointerEvents:"none"});
        setTimeout(function(){
            $('.btn_mb').css({pointerEvents:"auto"})
        },bn_timer);
    }

    

    // h_top scroll
    let header = $('.header');
    let h_top = $('.h_top');
    let h_bot_fixed = $('.h_bot_fixed')
    let h_bot = $('.h_bot')
    let h_bot_o_top = $('.h_bot').offset().top;
    let s_top = 0;

     // 이디야 배송 배너
    let sale_timer = 500;
    let sale_o_top = $('.sale_banner_box').offset().top;
    let sale_half_o_top = sale_o_top + ($('.sale_banner_box').height() / 4);
    // console.log(sale_o_top);
    // console.log(sale_half_o_top);
    
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

        // sale_banner_s_top
        if(s_top >= sale_half_o_top){
            // console.log("확인")
            $('.sale_small_banner').css({
                transform:"translateX(0%)"
            })
        }

    })

    let chk_mouse = false;
    // nav마우스 이벤트
    $('.h_bot_nav').hover(function(){
        if(chk_mouse) return;
        chk_mouse = true;
        let second = 200;
        $('.nav').slideToggle(second);
        setTimeout(() => {
            chk_mouse = false;
        }, second);
        
    })



    // 시간
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    sale_time(hour,minute,second);
    setInterval(function(){
        sale_time(hour,minute,second);
    },1000);

    function sale_time(hour,minute,second){
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        hour.innerHTML = zero(24-h-1);
        minute.innerHTML = zero(60-m-1);
        second.innerHTML = zero(60-s);
    }

    function zero(num){
        if(num < 10){
            num = "0"+num
        }
        return num;
    }

    // search클릭시 네모창으로 변경
    $('.search_icon a').click(function(){
        $('.search_icon').css({display:"none"});
        $('.icon_text').css({display:"block"})
    })

    // // ediya_best_menu

    let best_item_width = $('.best_item_img_box_1').outerWidth();
    let best_item_count = $('.best_item_img_box_1').length;
    let best_index_no = 0;
    let best_timer = 1000;

    for(let i = 0; i < best_item_count; i++){
        $('.best_item_img_box_1').eq(i).css({ left: i*best_item_width });
    }
    
    // console.log($('.best_item_img_box_1').width())
    $('.btn_R').click(function(){
        btn_init_best()
        // console.log("확인");
        $('.best_item_img_box_1').animate({
            left:"-="+best_item_width
        },best_timer);

        $('.best_item_img_box_1').eq(best_index_no % best_item_count).animate({
            left:best_item_width * (best_item_count -1)
        },0)

        best_index_no++;

        
    })
    $('.btn_L').click(function(){
        btn_init_best()
        // console.log("확인");
        best_index_no--;
        $('.best_item_img_box_1').eq((best_index_no) % best_item_count).animate({
            left:-best_item_width
        },0)
        $('.best_item_img_box_1').animate({
            left:"+="+best_item_width,
        },best_timer);

    })

    function btn_init_best(){
        $('.btn_best').css({pointerEvents:"none"});
        setTimeout(function(){
            $('.btn_best').css({pointerEvents:"auto"})
        },best_timer);
    }
    let best_auto_interval = "";
    function best_auto_slide(){
        clearInterval(best_auto_interval);
        best_auto_interval = setInterval(function(){
            $('.btn_R').trigger('click')
        },best_timer*3)
    }
    best_auto_slide();

    $('.best_item_btn').hover(function(){
        clearInterval(best_auto_interval);
    },function(){
        best_auto_slide();
    })

    // 브로슈어.맞춤커피추천배너
    let mini_L_interval = "";
    let mini_LL_interval = "";
    let mini_bn_timer = 500;
    
    // setInterval썼는데 안됨..
    // mini_L_interval = setInterval(function(){
    //     console.log("확인")
    //     $('.mini_L').css({transform:"translateY(-30px)"})
    //     $('.mini_L').css({transform:"translateY(30px)"})
    // },mini_bn_timer);
    
    
    // $('.mini_banner').mouseenter(function(){
    //     console.log("확인")
    //     $(this).css({
    //         transform:"translateY(-30px)"
    //     })
    // })
    // $('.mini_banner').mouseleave(function(){
    //     $(this).css({
    //         transform:"translateY(0)"
    //     })
    // })

    

    // 이디야 sns 배너
    let sns_index_no = 0;
    let sns_timer =1500;
    let sns_count = $('.ediya_sns_img').length;
    let sns_width = $('.ediya_sns_img').outerWidth();
    let sns_auto_interval = "";
    let list ="";



    // $('.btn_sns_R').click(function(){
    //     btn_init();

    //     $('.ediya_sns_img').animate({
    //         left: '-='+sns_width
    //     }, sns_timer ,"linear")
        
    //     setTimeout(() => {
    //         list =  $('.ediya_sns_img').eq(0).detach();
            
    //         $(list).appendTo('.ediya_sns_box').css({
    //             left: sns_width * (sns_count -1)
    //         })
        
    //     },sns_timer + 50);

    //     sns_index_no++;


    // })
    // //TODO : 주석 풀어야함
    // function sns_auto_slide(){
    //     sns_auto_interval = setInterval(function(){
    //         $('.btn_sns_R').trigger('click');
    //     },sns_timer+500);
    // }
    // sns_auto_slide();


    
    for(let i = 0; i < sns_count; i++){
        $('.ediya_sns_img').eq(i).css({left:i * sns_width});
    }
    
    $(window).resize(function(){
        $('.ediya_sns_img').stop();
        clearInterval(sns_auto_interval);
        setTimeout(function(){
            sns_auto_slide()
        },sns_timer);
        // ->resize하면 마우스 호버 기능이 안먹음(834번).다만 위에거 지우면 resize해도 마우스 호버 기능 잘 먹음
        sns_width = $('.ediya_sns_img').outerWidth();
        console.log(sns_width)
        for(let i = 0; i < sns_count; i++){
            $('.ediya_sns_img').eq(i).css({left:i * sns_width});
        }
        sns_index_no = 0;
        // sns_index_no = 0 즉 초기화 안해주면 resize한후에 이미지가 중간에 하나씩 사라짐.
    })
    
    $('.btn_sns_R').click(function(){
        btn_init_sns();
        // $('.ediya_sns_img').stop();
        $('.ediya_sns_img').animate({
            left:"-="+sns_width
        },sns_timer,"linear");
        // linear 써주면 탁탁 안끊기고 부드럽게 slide됨.

        $('.ediya_sns_img').eq(sns_index_no % sns_count).animate({
            left: sns_width * (sns_count -1)
        },0)
        sns_index_no++;
        console.log("sns_오른쪽찍음")
    })
    // console.log(sns_width * (sns_count -1))
    $('.btn_sns_L').click(function(){
        btn_init_sns()
        // console.log("확인")
        sns_index_no--;
        $('.ediya_sns_img').eq(sns_index_no % sns_count).animate({
            left:-sns_width
        },0)
        $('.ediya_sns_img').animate({
            left:"+="+sns_width
        },sns_timer,"linear");
    })

    function sns_auto_slide(){
        // requir로 바꾸기
        clearInterval(sns_auto_interval);
        sns_auto_interval = setInterval(function(){
            $('.btn_sns_R').trigger('click');
        },sns_timer);
    }
    sns_auto_slide();
    
    $('.ediya_sns_box').hover(function(){
        console.log("마우스 들어옴")
        clearInterval(sns_auto_interval);
        console.log("clearinterval 먹음")
    },function(){
        console.log("마우스 나감")
        sns_auto_slide();
    })
    
    function btn_init_sns(){
        $('.btn_sns').css({pointerEvents:"none"});
        setTimeout(function(){
            $('.btn_sns').css({pointerEvents:"auto"})
        },sns_timer);
    }
    // 탑버튼 클릭시 스크롤 부드럽게 이동
    $('.top_btn').click(function(){
            $('body,html').animate({
                scrollTop:0
            },sns_timer);
        })

})
