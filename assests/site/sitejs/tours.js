$(document).ready(function() {
    if(eUname!='') {
        isEpopOpen = 1;
        var message = '<div class="message-alert page-title">'+
        '<div class="container">'+
        '<div class="row">'+
                '<div class="col-12">'+
                    '<h6 class="primary-font heading-message"><span class="font-weight-600 d-inline-block mb-2">Dear '+eUname+',</span>  <span class="d-inline-block secondary-font">Greetings from  <a href="www.wegomap.com" class="text-lowercase"> www.wegomap.com</a>. Thank you so much for submitting your enquiry with us. We are delighted to be assisting you with your holiday arrangements.'+
        'We request you to go through the package details and please feel free to revert if you need any further changes or clarification.</span></h6>'+
                '</div>'+
            '</div>'+
         '</div>'+
        '</div>'
        $('.single-hero').addClass('mt-0');
        $('#messageinfo').html(message);
        // $('#messageinfo').after().append('<div class="mask-message"></div>');
        setTimeout(function(){ 
        $('.mask-message').addClass('hide');
        }, 3000);
        setTimeout(function(){ 
        $('.mask-message.hide').remove();
        $('.message-alert').css('z-index','1');
        setHero();
        }, 5000);
    }
});
