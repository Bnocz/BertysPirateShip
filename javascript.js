$(function() {

    var offset = $("#dropdownId").offset();
    var topPadding = 15;

    $(window).scroll(function() {
    
        if ($(window).scrollTop() > offset.top) {
        
            $("#dropdownId").stop().animate({
            
                marginTop: $(window).scrollTop() - offset.top + topPadding
            
            });
        
        } else {
        
            $("#dropdownId").stop().animate({
            
                marginTop: 0
            
            });
        
        }
        
            
    });

});