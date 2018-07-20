$(document).ready(function() {
    
    $('.loadpage').click(function() {
        var pageRef = $(this).attr('href');
        var url = window.location.href+pageRef;
        
        /* var href=url+pageRef; */
        var page = $(this).data('page');
        /*  var url = $(this).data('target'); */
        $.ajax({
            url: page,
            success: function(result){
                $('.content-wrapper').html(result);
                /* location.replace(url); */
            }
        });
    });
    var previousScroll = 0,
    headerOrgOffset = $('#menu_bar').offset().top;

    /* $('#background').height($('#menu_bar').height()); */

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
        if(currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                $('#menu_bar').fadeOut();
            } else {
                $('#menu_bar').fadeIn();
                $('#menu_bar').addClass('fixed');
            }
        } else {
            $('#menu_bar').removeClass('fixed');   
        }
        previousScroll = currentScroll;
    });
    })


$(window).on('load', function(){
    $("#Layer5 a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 60
          }, 1000, function(){
              /* window.location.hash = hash; */
          });
    });
});

