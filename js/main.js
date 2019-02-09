//Call Wow JS libruary
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  //Click to nav button
  $(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".click").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1400);
	});
});