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

$('.sale .introSale').animate({
    marginRight:'0',
  
},800);
$('.sale .photoSale').animate({
    marginLeft:'0',
  
},800)

//  function automaticSlide(){
//     var firstIndex=0;
//     var pics;
//     const imgSlid= $('.slid');
//     for(pics=0; pics<imgSlid.length(); pics++){
//         imgSlid[pics].style.css({display:'none'});
//     }
//     firstIndex++;
//     if(firstIndex > imgSlid.length()){
//         firstIndex =1;
//     }
//     imgSlid[firstIndex -1].style.css({display:'block'});
//     automaticSlide()
//  }

//  automaticSlide()



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