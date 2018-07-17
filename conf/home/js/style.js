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
})