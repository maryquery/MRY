// Reference: https://stackoverflow.com/questions/10994909/do-something-when-page-is-scrolling-and-have-some-position

$(window).on("load",function(){
      // Animate loader off screen
			$("#loader").animate({
				'width': '100%'
			}, 1000);
});

$(document).ready(function(){

    //header function
    $(window).scroll(function(){
        if ($(window).scrollTop() > 25){
          $('header').addClass('fixed');
        } else if ($(window).scrollTop() < 25){
          $('header').removeClass('fixed');
        };
    });

    //contact
    $('.contact i , nav a[href$="#contact"]').click(function(){
      $('.contact').toggleClass('clicked');
      $('.contact i').toggleClass('icon-message icon-cross_mark');
    });
});
