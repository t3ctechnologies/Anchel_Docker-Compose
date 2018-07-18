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

/* $(document).ready(function(){
    
    $("#Layer5 a").on('click', function(event) {
      
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
      }  
    });
}); */
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