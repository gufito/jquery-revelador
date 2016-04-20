;(function($) {

	var w = $(window);
	$.fn.revelador = function(opciones, callback) {

		var imagenes = $('img');
		var acargar = [];

		for (var i = 0; i < imagenes.length; i++) { if ( $(imagenes[i]).attr('data-src') !== undefined ){ acargar.push(imagenes[i]) } };
		

		function revelador(){
			$.each(acargar,function(i,e){
				var  t = $(e), 
					st = w.scrollTop(), 
					wb = st + w.height(),

					it = t.offset().top,
					ib = it + t.height(),

					 d = t.data('src');

				if((ib >= st) && (it <= wb)){
					var img = new Image();
	                img.onload = function(){
	                    t.attr("src", d).css({'opacity':1});
	                };
	                img.src = d;
				}
			});
		}


		w.on('scroll', revelador);
		//revelador();
	};

}( jQuery ));