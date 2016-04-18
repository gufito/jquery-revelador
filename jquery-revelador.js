(function($) {

	$.fn.revelador = function(opciones, callback) {

		var w = $(window),
			O = $.extend({
				offset 		: 200,
				loader		: 'loader',
				imgs		: this
			}, opciones);

		function revelador(){
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

	        if (typeof callback === "function") callback.call(this);
		}

		revelador();
	};

}( jQuery ));