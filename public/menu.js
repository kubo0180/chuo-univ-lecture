// Instagramから情報を取得して表示
$(document).bind("pageinit", function() {
  $.getJSON(
    "https://api.instagram.com/v1/tags/comodomenu/media/recent?access_token=145275720.acfec80.cf5b0ee0d95543a2a89bde2121218e1d&callback=?",
    function( r ) {

      for(var i = 1; i <= 5; i++){
        if(r.data[i].caption != null) var cap = r.data[i].caption.text;
        var tag_str = '<img class="result" src="' + r.data[i].images.low_resolution.url
          + '" /><h2>' + r.data[i].user.username + '</h2><p>' + cap + '</p>';
        $(tag_str).appendTo('#menu_list');
      }
    }
  );
});
