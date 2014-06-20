(function($){

  $(document).ready(function() {

    $('.node-shop-item .field-name-field-node-shop-item-cover-image').each(function(index, element) {
      var cover_image_big_url = $($(element).find('.field-items a').get(0)).attr('href');
      $(element).before('<div class="cover-image-big"><img src="' + cover_image_big_url + '"></div>');
    });


    
    $('.node-shop-item .field-name-field-node-shop-item-cover-image .field-items a').click(function(event) {
      event.preventDefault();
      var cover_image_big_url = $(this).attr('href');
      $(this).closest('.node').find('.cover-image-big img').attr('src', cover_image_big_url);
    });


  });

})(jQuery);