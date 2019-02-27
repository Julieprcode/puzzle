
$('document').ready(function(){
    $('.change').click(function(e){
        var src= $(this).attr("src");
        var alt= $(this).attr("data-alt-src")  

        $(this).attr("src", alt);
        $(this).attr("data-alt-src", src);
    })




    
//     $('.chang2').click(function(e){
//         $(this).attr("src","img/beach2.jpg");
//         $(this).attr("data-alt-src","img/desert2.jpg")  
//     })

//     $('.change3').click(function(e){
//         $(this).attr("data-alt-src","img/beach3.jpg");
//         $(this).attr("src","img/desert3.jpg")    
// })
// $('.change4').click(function(e){
//     $(this).attr("data-alt-src","img/beach4.jpg");
//     $(this).attr("src","img/desert4.jpg")
// })

// $('.change5').click(function(e){
//     $(this).attr("data-alt-src","img/beach5.jpg");
//     $(this).attr("src","img/desert5.jpg")
// })




})