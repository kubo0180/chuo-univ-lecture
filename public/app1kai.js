$(document).bind('pageinit', function() {
  $('h1').css('color', 'skyblue').fadeIn('slow');
  $('h2').click(function() {
    var new_p = '<img src="http://store.storeimages.cdn-apple.com/6642/as-images.apple.com/is/image/AppleInc/2013-holiday-home-rail-app?wid=100&hei=70&fmt=png-alpha&qlt=95">'
    $('#menu_list').append(new_p);
  });
});
