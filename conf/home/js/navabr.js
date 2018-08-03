function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(window).on('load', function(){
    $(".start-block a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 60
            }, 1000, function(){
                /* window.location.hash = hash; */
        });
    });
});
var prevScrollpos = window.pageYOffset;
$('#mynav').hide(); 
    window.onscroll = function() {
        $('#mynav').show(); 
        var currentScrollPos = window.pageYOffset;
        
        if(currentScrollPos == 0){
            $('#mynav').hide(); 
        }
        if (prevScrollpos > currentScrollPos) {
            $('#myTopnav').show();
            $('#mynav').removeClass('fixed');
            document.getElementById("mynav").style.top = "0";
            
        } else {
            $('#myTopnav').hide(); 
            $('#mynav').addClass('fixed');
            document.getElementById("mynav").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }
