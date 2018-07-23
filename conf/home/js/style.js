$(document).ready(function() {
    
    $('.loadpage').click(function() {
        var pageRef = $(this).attr('href');
        var hash = this.hash;
        alert(hash);
       /*  var url = window.location.href+pageRef; */
        
        /* var href=url+pageRef; */
        var page = $(this).data('page');
        var url = window.location.hash  + page;
        /*  var url = $(this).data('target'); */
        $.ajax({
            url: url,
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




