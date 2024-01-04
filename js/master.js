$(document).ready(function(){


    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
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
    if($(window).scrollTop() >= $('.sale .introSale').offset().top - 250){
        
        $('.sale .introSale').animate({
            marginRight:'0',
          
        },800);
        
    }
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.sale .photoSale').offset().top - 250){
            
            $('.sale .photoSale').animate({
                marginLeft:'0',
              
            },800);
            
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
    if($(window).scrollTop() >= $('.partePhone').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(/img/img-1946.jpg)'
      
        },10) ;
        
    }else{
       
    }
    });


$(window).scroll(function(){
    if($(window).scrollTop() >= $('.partePhone2').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(/img/pexels-marek-levak-2265487.jpg)'
      
        },10) ;
        
    }else{
       
    }
    });

$(window).scroll(function(){
    if($(window).scrollTop() >= $('.partePhone3').offset().top){
        
        $('.bodyImg').css({
           
            'background-image': 'url(/img/pexels-jonas-svidras-576739.jpg)'
      
        },10) ;
        
    }
    });








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