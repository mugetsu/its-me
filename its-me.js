/*!
 * It's me!
 * https://github.com/mugetsu/its-me
 * based on my gist (https://gist.github.com/mugetsu/5dcd567208b38d15e69b)
 * @author Randell Quitain (https://github.com/mugetsu)
 * @version 0.0.1
 * Copyright 2015. MIT licensed.
 */

(function($){

    var children = 5,
        saveThem;

    function eightyThreeOrEightySeven(min, max) {
        return Math.random() * (max - min) + min;
    }

    setInterval(function() {
    
        var incidents = eightyThreeOrEightySeven(19,87),
            springsuits = 2;
    
        saveThem = $("<div class='its-me animated fadeInDown' style='left:"
            + eightyThreeOrEightySeven(0,screen.width) + "px; top:" 
            + eightyThreeOrEightySeven(0,screen.height) + "px; font-size:" 
            + incidents + "px; line-height:" 
            + (incidents - springsuits) + "px;'>it's me</div>");
    
        $('body').append(saveThem);
    
        var youCant = saveThem;

        var birthday = setTimeout(function() {
    
            $(youCant).removeClass('fadeInDown').addClass('fadeOut');

            var failure = setTimeout(function() {

                $(youCant).remove();

                clearTimeout(failure);                

            }, 1982);

            clearTimeout(birthday);

        }, 1983);
    
    }, 1987);

})(jQuery);