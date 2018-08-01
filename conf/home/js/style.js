$(document).ready(function() {
    var routes =[];
    $('.loadpage').each(function(e) {
        routes[$(this).attr("href")] = $(this).data('page');
    });
    
    var currentPage = $(location).attr("href");
    var pathObj    = currentPage.split("#");
    var defaultPage = "ancheluserwebPortal/introductionUser.html";
    var path = (pathObj[1] !== undefined)? pathObj[1]:defaultPage;
    var pageUrl = (routes['#'+path] !== undefined)? routes['#'+path] :defaultPage;
    $.ajax({
        url: pageUrl,
        success: function(result){
            $('.content-wrapper').html(result);
        }
    });

    $('.loadpage').click(function() {
        var page = $(this).data('page');        
        $.ajax({
            url: page,
            success: function(result){
                $('.content-wrapper').html(result);
            }
        });
    });
   /*  var previousScroll = 0,
    headerOrgOffset = $('#menu_bar').offset().top;
 */
    /* $('#background').height($('#menu_bar').height()); */

   /*  $(window).scroll(function() {
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
    }); */
    



});
