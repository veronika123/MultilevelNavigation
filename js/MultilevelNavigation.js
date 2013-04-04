$(document).ready( function()
{
    $('#navigation > div > ul > li').click(function()
    {
        $('ul', this).slideToggle(200);
        $(this).toggleClass();
    });

    $('#navigation #expand').click(function()
    {
        if ($(this).attr('id') == 'expand')
        {
            $('#navigation > div > ul > li > ul').slideDown(200);
            $('#navigation > div > ul > li').addClass('opened');

            $(this).html('Collapse all');
            $(this).attr('id', "collapse");
        }
        else if ($(this).attr('id') == 'collapse')
        {
            $('#navigation > div > ul > li > ul').slideUp(200);
            $('#navigation > div > ul > li').removeClass('opened');

            $(this).html('Expand all');
            $(this).attr('id', "expand");
        }
    });
});
