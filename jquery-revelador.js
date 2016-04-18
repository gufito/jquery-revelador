(function($) {

	$.fn.revelador = function(opciones, callback) {

		var w = $(window),
			O = $.extend({
				offset 		: 200,
				loader		: 'loader',
				imgs		: this
			}, opciones);

		function revelador(){
			/*var  t = $(this), 
				st = w.scrollTop(), 
				sl = w.scrollLeft(), 
				wb = st + w.height(),

				it = t.offset().top,
				ib = it + t.height(),

				 d = t.data('src');
			
			if((ib <= wb) && (it >= st)){
				var img = new Image();
                img.onload = function(){
                    t.attr("src", d).css({'opacity':1});
                };
                img.src = d;
			}*/
			O.imgs.filter(function() {
				/*var $element = $(this);

			    var window_left = w.scrollLeft();
			    var window_top = w.scrollTop();
			    var offset = $element.offset();
			    var left = offset.left;
			    var top = offset.top;
			    var d = $element.data('src');

			    if (top + $element.height() >= window_top &&
			        top - ($element.data('appear-top-offset') || 0) <= window_top + w.height() &&
			        left + $element.width() >= window_left &&
			        left - ($element.data('appear-left-offset') || 0) <= window_left + w.width()) {
			      
			      	var img = new Image();
		            img.onload = function(){
		                $element.attr("src", d).css({'opacity':1});
		            };
		            img.src = d;


			    } else {
			      return false;
			    }*/
			    var  t = $(this), 
					st = w.scrollTop(), 
					sl = w.scrollLeft(), 
					wb = st + w.height(),

					it = t.offset().top,
					ib = it + t.height(),

					 d = t.data('src');
				
				if((ib <= wb) && (it >= st)){
					var img = new Image();
	                img.onload = function(){
	                    t.attr("src", d).css({'opacity':1});
	                };
	                img.src = d;
				}
			});

	        if (typeof callback === "function") callback.call(this);
		}

		revelador();
	};

}( jQuery ));