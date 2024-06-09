$(document).ready(function(){
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

