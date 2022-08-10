/*global $*/
$(function () {
    'use strict';
    for (var i=1970 ; i<=2017 ; i++){
        $("<option>" ,{value:i , text:i}).appendTo("#years")
    }
        for(var i=1 ; i<=31 ; i++){
        $("<option>" ,{value:i , text:i}).appendTo("#days")
    }
})

$(document).ready(function() {
    $('.icon').click(function () {console.log('hello')
    $('#password').toggleClass('active') 
    if($('#password').hasClass('active')){
  $('#password').attr('type' , 'text');
    }
  else {
    $('#password').attr('type' , 'password');   
}
})
    
   $('.icon2').click(function () {console.log('hello')
    $('.tt').toggleClass('active') 
    if($('.tt').hasClass('active')){
  $('.tt').attr('type' , 'text');
    }
  else {
    $('.tt').attr('type' , 'password');   
}
})
})


$(function(){
    $(window).resize(function(){
        $('.contant').css({'height':($(document).height())+'px'});
    });
});

$(window).resize(function(){
    $('.content').css({'heigth':($(document).height())+'px'})
    console.log($(document).height())
})











