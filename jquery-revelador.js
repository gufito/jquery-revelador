;(function($) {

	var w = $(window);
	$.fn.revelador = function(opciones, callback) {

		var imagenes = this;
			o = $.extend({
				offset 	: 0,
				delay 	: 0.6,
			},opciones),
			acargar = [],
			reveladas = [];

		for (var i = 0; i < imagenes.length; i++) { if ( $(imagenes[i]).attr('data-src') !== undefined ){ 
				$(imagenes[i]).css({
					'opacity' 	: '0',
					'-webkit-transition': 'all '+o.delay+'s, ease-in-out ease-out',
					'-moz-transition'	: 'all '+o.delay+'s, ease-in-out ease-out',
					'-o-transition'		: 'all '+o.delay+'s, ease-in-out ease-out',
					'transition'		: 'all '+o.delay+'s, ease-in-out ease-out',
				});
				acargar.push(imagenes[i]);
			}};

		function revelador(){
			$.each(acargar,function(i,e){
				var  t = $(e), 
					st = w.scrollTop(), 
					sl = w.scrollLeft(),
					wb = st + w.height(),
					wr = sl + w.width(),

					it = t.offset().top,
					il = t.offset().left,
					ib = it + t.height(),
					ir = il + t.width(),
					 d = t.data('src');

				//console.log(st + " - " + sl + " - " + wb + " - " + wr + " - " + it + " - " + il + " - " + ib + " - " + ir + " - " + d);
				if((ib >= st + o.offset) && (it <= wb - o.offset) && (ir >= sl + o.offset) && (il <= wr - o.offset)){
					var img = new Image();
	                img.onload = function(){
	                    t.attr("src", d).css({'opacity':1});
	                    reveladas.push(t);
	                    acargar.splice(i,1);
	                    callback(t,reveladas);
	                };
	                img.src = d;
				}
			});
		}


		w.on('scroll load', revelador);
	};

}( jQuery ));