$(document).ready(function(){
    let bn_index_no = 1;
    let bn_count = $('.banner').length;
    let bn_timer = 500;
    let bn_auto_interval = "";
    console.log(bn_count);
    $('.btn_R').click(function(){
        btn_init()
        clearInterval(bn_auto_interval);
        setTimeout(function(){
            bn_auto_slide();
        },bn_timer);
        $('.banner').eq(bn_index_no % bn_count).css({
            left:"101%"
        }).animate({
            left:0
        },bn_timer);
        $('.banner').eq((bn_index_no -1) % bn_count).animate({
            left:"-101%"
        },bn_timer);

        bn_index_no++;
    })

    $('.btn_L').click(function(){
        btn_init();
        clearInterval(bn_auto_interval);
        setTimeout(function(){
            bn_auto_slide();
        },bn_timer);
        bn_index_no--;
        $('.banner').eq((bn_index_no-1) % bn_count).css({
            left:"-101%"
        }).animate({
            left:0
        },bn_timer);
        $('.banner').eq(bn_index_no % bn_count).animate({
            left:"101%"
        },bn_timer);
    })
    bn_auto_slide();

    function bn_auto_slide(){
        // btn_init();
        bn_auto_interval = setInterval(function(){
            $('.btn_R').trigger('click')
        },bn_timer + 2000)
    }

    function btn_init(){
        $('.mb_btn').css({pointerEvents:"none"})
        setTimeout(function(){
            $('.mb_btn').css({pointerEvents:"auto"})
        },bn_timer);
    }
})

// 이디야 md추천
let recommend_count = $('.recommend_item').length;
let re_timer = 4000;
let recommend_index_no = 1;
let reco_auto_interval = "";



$('.recommend_item').eq(0).css({display:"block"})

function reco_auto_slide(){
    reco_auto_interval = setInterval(function(){
        $('.recommend_item').eq(recommend_index_no % recommend_count).css({zIndex:9999}).fadeIn(re_timer);
        $('.recommend_item').eq((recommend_index_no -1) % recommend_count).css({zIndex:1}).fadeOut(0);
        recommend_index_no++;
    },re_timer);

}

$('.now_click').click(function(){
    $('.now_click').css({background:"#333",color:"white",fontWeight:"bold"})
})


reco_auto_slide();


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
