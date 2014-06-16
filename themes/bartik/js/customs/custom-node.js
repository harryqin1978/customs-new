(function($){

  $(document).ready(function() {

    if ($('body').hasClass('node-type-model')) {
      var model_name = $('h1#page-title').text().trim();
      $('#block-system-main .content .node .content').append('<div class="more">' + model_name + ', Book this model <a href="/contact">here</a></div>');
    }

  });

})(jQuery);