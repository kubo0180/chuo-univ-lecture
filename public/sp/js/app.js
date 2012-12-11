$(function() {
  // MAISONRY
  var $tumblelog = $('#tumblelog');
  $tumblelog.masonry({
    itemSelector: '.box',
    columnWidth: 170,
    isAnimated: true
  });

  var tag="comodomenu";
  var inst_url="https://api.instagram.com/v1/tags/" + tag + "/media/recent";

  $.ajax({
  url: inst_url,
  data: {access_token: "145275720.acfec80.cf5b0ee0d95543a2a89bde2121218e1d"},
  dataType: "jsonp",
  error: function(xhr, textStatus, errorThrown) {
    document.getElementById("text_area").innerHTML = textStatus;
  },
  success: function(data, textStatus, xhr) {
            var html = "";
            for (var i = 0, length = data.data.length; i < length; i++) {
              var d = data.data[i];
              if ( i % 2 == 0 ){
                html += "<div class='box col2'><img src='" + d.images.low_resolution.url + "'/>" + '<h3>' + d.user.username + "</h3><p class='caption'>" + d.images.low_resolution.url + "</p></div>";
              }else{
                html += "<div class='box col1'><img src='" + d.images.thumbnail.url + "'/>" + '<h3>' + d.user.username + "</h3><p class='caption'>" + d.images.thumbnail.url + "</p></div>";
              }
            }
            var $boxes = $(html);
            $boxes.imagesLoaded(function(){
              $tumblelog.masonry().append($boxes).masonry('appended', $boxes, true);
            });
          }
  });

});
