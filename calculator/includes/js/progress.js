//progress JS by Alex and James---------------------------------->
$('.prog a').click(function() {
  if ( !$(this).parent().hasClass('active') ) {
    $(this).parent().addClass('active')
    .siblings('.active')
    .removeClass('active');
    $(this).parent().parent().children().removeClass('completed');
    $(this).parent().prevAll().addClass('completed');

    // also switch panels
    var tar = $(this).attr('href');
    $(tar).addClass('active')
      .siblings('.active')
      .removeClass('active')
  }
  return false;
});


// in-panel "next" links
$('.panel a.next').click(function() {
  var actv = $('.prog .active');
  var nex = actv.next();

  if (nex.size() > 0) {
    // click handles changing .active
    nex.children('a').click();
  } else {
    // on the last?
    actv.removeClass('active')
      .addClass('completed');

    $('#step7').addClass('active')
      .siblings('.active')
      .removeClass('active');
  }
  return false;
});


// in-panel back links
$('.panel a.back').click(function() {
  var actv = $('.prog .active');
  var preev = actv.prev();

  if (actv.size() > 0) {
    // click handles changing .active
    preev.children('a').click();
  } else {
    // on the step 7 : so go back to 6
    $('.prog li:last a').click();
  }
  return false;
});
