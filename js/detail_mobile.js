$(document).ready(function(){
    // 추천 음료 슬라이드
            let drink_count = $('.drink_1').length;
            let drink_timer = 2000;
            let drink_index_no = 0;
            let drink_width = $('.drink_1').outerWidth();
            let drink_auto_interval = "";

            $(window).resize(function(){
                $('.drink_1').stop(true);
                drink_width = $('.drink_1').outerWidth();
                for(let i =0; i < drink_count; i++){
                    $('.drink_1').eq(i).css({left:i*drink_width});
                }
                drink_index_no = 0;
            })

            for(let i =0; i < drink_count; i++){
                $('.drink_1').eq(i).css({left:i*drink_width});
            }
            
            $('.drink_btn_R').click(function(){
                btn_init();
                clearInterval(drink_auto_interval);
                setTimeout(function(){
                    drink_auto_slide();
                },drink_timer);
                $('.drink_1').animate({
                    left:"-="+drink_width
                },drink_timer,"linear");

                $('.drink_1').eq(drink_index_no % drink_count).css({
                    left:-drink_width
                }).animate({
                    left:drink_width * (drink_count -1)
                },0)

                drink_index_no++;
            })
            $('.drink_btn_L').click(function(){
                clearInterval(drink_auto_interval);
                setTimeout(function(){
                    drink_auto_slide();
                },drink_timer);
                btn_init();
                drink_index_no--;

                $('.drink_1').eq(drink_index_no % drink_count).animate({
                    left:-drink_width
                },0)
                
                $('.drink_1').animate({
                    left:"+="+drink_width
                },drink_timer , "linear");
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
                },drink_timer+500);
            }
            
            drink_auto_slide();
    let ham_chk = true;
    let ham_timer = 300;

    $('.ham_btn').click(function(){
        if(ham_chk){
            $('#line_top').css({
                transform:"translateY(10px)"
            })
            setTimeout(function(){
                $('#line_top').css({
                    transform:"translateY(10px) rotate(45deg)"
                })
            },ham_timer);

            setTimeout(function(){
                $('#line_mid').css({
                    transform:"scale(0)"
                })
            },ham_timer);

            $('#line_bot').css({
                transform:"translateY(-10px)"
            })
            setTimeout(function(){
                $('#line_bot').css({
                    transform:"translateY(-10px) rotate(-45deg)"
                })
            },ham_timer);
        }

        else{
            $('#line_top').css({
                transform:"translateY(10px) rotate(0)"
            })
            setTimeout(function(){
                $('#line_top').css({
                    transform:"translateY(0)"
                })
            },ham_timer)

            setTimeout(function(){
                $('#line_mid').css({
                    transform:"scale(1)",
                })
            },ham_timer)

            $('#line_bot').css({
                transform:"translateY(-10px) rotate(0)" 
            })
            setTimeout(function(){
                $('#line_bot').css({
                    transform:"translateY(0)"
                })
            },ham_timer)
        }

        ham_chk =! ham_chk;
        
        $('.ham_nav').toggleClass('pan_active')



    })

})