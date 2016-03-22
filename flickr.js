$(document).ready(function () {
  $('#frm-btn').click(function () {
    $('#contact-form').hide();

    var flickerAPI ="http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var magic = $(this).text();
    var flickrOptions = {
      tags: magic,
      format:"json"
    };

    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each( data.items, function(i, photo) {
        photoHTML += '<li class="col-md-6"></li>';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });//end each
      photoHTML += '</ul>';
      photoHTMl += '<h2>Success!</h2>'

      $('#photos').html(photoHTML);
    }

    $getJSON(flickerAPI, flickrOptions, displayPhotos);

  });//End Button CLick
});//END Ready
