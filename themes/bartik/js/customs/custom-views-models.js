(function($){

  $(document).ready(function() {

    $('.view-models .field-name-field-node-model-cover-image').each(function(index, element) {
      var cover_image_big_url = $($(element).find('.field-item a').get(0)).attr('href');
      $(element).before('<div class="cover-image-big"><img src="' + cover_image_big_url + '"></div>');
    });

    $('.view-models .views-row .node').each(function(index, element) {
      var model_name = $(element).find('h2 a').text();
      var detail_link = $(element).find('h2 a').attr('href');
      $(element).append('<div class="more">See more <a href="' + detail_link + '">here</a></div>');
    });

    $('.view-models .field-name-field-node-model-cover-image .field-item a').click(function(event) {
      event.preventDefault();
      var cover_image_big_url = $(this).attr('href');
      $(this).closest('.node').find('.cover-image-big img').attr('src', cover_image_big_url);
    });

  });

})(jQuery);