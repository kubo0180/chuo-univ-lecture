$(document).bind("pageinit", function() {
  $.getJSON(
    "https://api.instagram.com/v1/tags/comodomenu/media/recent?access_token=145275720.acfec80.cf5b0ee0d95543a2a89bde2121218e1d&callback=?",
    function( r ) {
      for(var i = 0; i < r.data.length; i++){
        if(r.data[i].caption != null) var cap = r.data[i].caption.text;
        var tag_str = '<h3><img src="' + r.data[i].user.profile_picture + '" width="35" height="35" />' + r.data[i].user.username
          + '<img src="http://www.umiyama.ne.jp/bar/images/like.gif" class="like-icon" /><span class="likes">'
          + r.data[i].likes.count + '</span></h3><img class="result" src="' + r.data[i].images.low_resolution.url
          + '" /><p>' + cap + '</p><hr>';
        $(tag_str).appendTo('#menu_list');
      }
    }
  );
});
