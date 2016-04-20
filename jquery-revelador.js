;(function($) {

	var w = $(window);
	$.fn.revelador = function(offset, delay, callback) {

		var imagenes = $('img');
		var acargar = [];
		offset = offset || 0;
		delay = delay || 0.6;
		console.log(offset);

		for (var i = 0; i < imagenes.length; i++) { if ( $(imagenes[i]).attr('data-src') !== undefined ){ 
				$(imagenes[i]).css({
					'opacity' 	: '0',
					'-webkit-transition': 'all '+delay+'s, ease-in-out ease-out',
					'-moz-transition'	: 'all '+delay+'s, ease-in-out ease-out',
					'-o-transition'		: 'all '+delay+'s, ease-in-out ease-out',
					'transition'		: 'all '+delay+'s, ease-in-out ease-out',
				});
				acargar.push(imagenes[i]); 
			} };


		function revelador(){
			$.each(acargar,function(i,e){
				var  t = $(e), 
					st = w.scrollTop(), 
					wb = st + w.height(),

					it = t.offset().top,
					ib = it + t.height(),

					 d = t.data('src');

				if((ib >= st + offset) && (it <= wb - offset)){
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