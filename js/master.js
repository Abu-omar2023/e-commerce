$(document).ready(function(){


    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
    $("button.bar").hover(function(){
        $("button.bar span").animate({
            "width":"100%"
        },150)
    },function(){
        $("button.bar span").animate({
            "width":"0"
        },150)
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= 600){
            $('.scrolltop').fadeIn()
        }
        else{
            $('.scrolltop').fadeOut()
        }
       });
       $('.scrolltop').click(function(){
        $('html, body').animate({
            scrollTop : 0
        })
       });
    show();

    function show(){
        $('.logo').fadeOut(1000, function () {
            $('.logo').fadeIn(800);
            show();
        });
};





$('.intro .slider').animate({
    left: '0',
  
},800)
$('.intro .rightIntro').animate({
    right: '0',
    
    margin: '10px auto'
},800);


 function slider(){
    $current = $('.slider img.active');
    if($current.length==0){
        $('.slider img:first-child').addClass('active');
    }else{
        $next = $current.removeClass('active').next();
        if($next.length==0){
            $('.slider img:first-child').addClass('active');
        }else{
            $next.addClass('active');
        }
    }
 } 
setInterval(slider,3000);



$(window).scroll(function(){
    if($(window).scrollTop() >= $('.sale .introSale').offset().top - 200){
        
        $('.sale .introSale').animate({
            marginRight:'0',
          
        },600);
        
    }
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.sale .photoSale').offset().top - 200 ){
            
            $('.sale .photoSale').animate({
                marginLeft:'0',
              
            },600);
            
        }
        });
        $('.hiden-nav').click(function(e){
            e.stopPropagation();
            $('.sacand-nav').addClass('visible');
            $(this).addClass('menu-active')
        });
        $('.sacand-nav').click(function(e){
        e.stopPropagation();
        
        });
        document.addEventListener("click", (e) => {
        if (e.target !== $('.hiden-nav') && e.target !== $('.sacand-nav')){
            if ($('.sacand-nav').hasClass('visible')){
                $('.sacand-nav').removeClass('visible');
                $('.hiden-nav').removeClass('menu-active')
            }
        }
        });
        

$('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    }
});
$('#autoWidth2').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth2').removeClass('cS-hidden');
    }
});
$('#autoWidth3').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth3').removeClass('cS-hidden');
    }
});
$('#autoWidth4').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    }
});
$(window).scroll(function(){
    if($(window).scrollTop() >= $('.sale').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(./img/pexels-cottonbro-studio-5081398.jpg)'
      
        },10) ;
        
    }else{
       
    }
    });
$(window).scroll(function(){
    if($(window).scrollTop() >= $('.partePhone').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(./img/img-1946.jpg)'
      
        },10) ;
        
    }else{
       
    }
    });


$(window).scroll(function(){
    if($(window).scrollTop() >= $('.partePhone2').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(./img/pexels-marek-levak-2265487.jpg)'
      
        },10) ;
        
    }else{
       
    }
    });

$(window).scroll(function(){
    if($(window).scrollTop() >= $('.partePhone3').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(./img/pexels-jonas-svidras-576739.jpg)'
      
        },10) ;
        
    }
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.partePhone4').offset().top){
            
            $('.bodyImg').css({
               
                'background-image': 'url(./img/pexels-max-fischer-5872364.jpg)'
          
            },10) ;
            
        }
        });


$('.contact-content button.bar').click(function(){
    $('.map').fadeIn(500);
});
$('.map button').click(function(){
    $('.map').fadeOut(500);
})





// $('.navbar ul li').hover(function(e){
//     e.target;
//     $('.navbar ul li span').animate({
//         'width':'100%'
//     },100)
// },function(){
//     $('.navbar ul li span').animate({
//         'width':'0'
//     },200)
  
// })
})