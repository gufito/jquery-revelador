;(function($) {

	var w = $(window);
	$.fn.revelador = function(opciones, callback) {

		var imagenes = this;
			o = $.extend({
				offset 	: 0,
				delay 	: 0.6,
			},opciones),
			acargar = [];

		for (var i = 0; i < imagenes.length; i++) { if ( $(imagenes[i]).attr('data-src') !== undefined ){ 
				$(imagenes[i]).css({
					'opacity' 	: '0',
					'-webkit-transition': 'all '+o.delay+'s, ease-in-out ease-out',
					'-moz-transition'	: 'all '+o.delay+'s, ease-in-out ease-out',
					'-o-transition'		: 'all '+o.delay+'s, ease-in-out ease-out',
					'transition'		: 'all '+o.delay+'s, ease-in-out ease-out',
				});
				acargar.push(imagenes[i]); 
			} };

		function revelador(){
			$.each(acargar,function(i,e){
				var  t = $(e), 
					st = w.scrollTop(), 
					sl = w.scrollLeft(),
					wb = st + w.height(),

					it = t.offset().top,
					ib = it + t.height(),

					 d = t.data('src');

				if((ib >= st + o.offset) && (it <= wb - o.offset)){
					var img = new Image();
	                img.onload = function(){
	                    t.attr("src", d).css({'opacity':1});
	                };
	                img.src = d;
				}
			});
		}


		w.on('scroll load', revelador);
		//revelador();
	};

}( jQuery ));