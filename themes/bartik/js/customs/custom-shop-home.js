(function($){

  $(document).ready(function() {

    var target_url = '/ajax-term-list/2';
    $.ajax({
      url: target_url,
      success: function(data) {
        showShopHomeTerms(data);
      },
      dataType: 'json'
    });

  });

  function showShopHomeTerms(data) {
    $('.view-shop-home-slideshow .bx-viewport').append('<div class="catergory-line"><ul></ul></div>');
    for (var i=0; i<data.terms.length; i++) {
      var term_id = data.terms[i].term.tid;
      var term_name = data.terms[i].term.name;
      $('.view-shop-home-slideshow .bx-viewport .catergory-line ul').append('<li class="term-' + term_id + '"><a href="/shop-home/' + term_id + '">' + term_name + '</a></li>');
      var path_names = window.location.pathname.split('/');
    }
    var current_term_id = path_names[path_names.length-1];
    $('.view-shop-home-slideshow .bx-viewport .catergory-line ul li.term-' + current_term_id).addClass('active');
  }

})(jQuery);