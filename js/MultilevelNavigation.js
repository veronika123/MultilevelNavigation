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

/*
$(document).ready(function() {

    $("#menu > li > a").click(function (e) { // binding onclick
        if ($(this).parent().hasClass('selected')) {
            $("#menu .selected ul").slideUp(100); // hiding popups
            $("#menu .selected").removeClass("selected");

        } else {

            $("#menu .selected div div").slideUp(100); // hiding popups
            $("#menu .selected").removeClass("selected");

            if ($(this).next(".subs").length) {
                $(this).parent().addClass("selected"); // display popup
                $(this).next(".subs").children().slideDown(200);
            }
        }
        e.stopPropagation();
    });

    $("body").click(function () { // binding onclick to body
        $("#menu .selected div div").slideUp(100); // hiding popups
        $("#menu .selected").removeClass("selected");
    });
});
*/

/*
$(document).ready(function(){
    $('#menu li a').click(function() {
        if ($(this).hasClass('expanded')) {
            $(this).parent().find('ul:first').hide();
            $(this).removeClass('expanded');
        }
        else {
            $('#submenu ul').hide();
            $(this).parent().find('ul:first').show();
            $(this).addClass('expanded');
        }
    });     
});
*/