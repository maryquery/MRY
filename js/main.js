// Reference: https://stackoverflow.com/questions/10994909/do-something-when-page-is-scrolling-and-have-some-position

$(document).ready(function(){

    //header function
    $(window).scroll(function(){
        if ($(window).scrollTop() > 25){
          $('header').addClass('fixed');
        } else if ($(window).scrollTop() < 25){
          $('header').removeClass('fixed');
        };
    });

    $('.contact , nav a[href$="#contact"]').click(function(){
      $('.contact').toggleClass('clicked');
      $('.contact i').toggleClass('icon-chevron_up icon-chevron_down');

    });
});
