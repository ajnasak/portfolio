$(function (){

    /*========== [] Progress Bar ==========*/
    $(window).on('scroll', function () {
      $('.skills-progress span').each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = $(window).scrollTop() + $(window).height(),
          myVal = $(this).attr('data-value');
        if (bottom_of_window > bottom_of_object) {
          $(this).css({
            width: myVal
          });
        }
      });
    });
  
  
  });