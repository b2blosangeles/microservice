$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}			
		var v = $('QALET'), r={}, f=[];	
		for (var i = 0; i < v.length; i++) {
			var data = $(v[i]).html();
			if (!data) data = $(v[i]).attr('data');
			var o = parse(data);
			if (o.module) {
				r[o.module] = true;
				o.id = o.module + '_plugin_' + i;
				f[f.length] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				console.log(o);
			}
		}
	}
);
