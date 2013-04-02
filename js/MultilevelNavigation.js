$(document).ready(function(){
    $('#menu ul li a').click(function() {
        if ($(this).hasClass('expanded')) {
            $(this).parent().find('ul:first').hide();
            $(this).animate({height: '-=35px'});
            $(this).removeClass('expanded');
        }
        else {
            $('#submenu ul').hide();
            $(this).parent().find('ul:first').slideDown('slow');
            $(this).animate({height: '+=35px'});
            $(this).addClass('expanded');
        }
    });     
});
