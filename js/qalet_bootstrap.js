if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}};
$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}
		_QALET_.addLet = function() {
			var v = $('QALET'), r = {};	
			for (var i = 0; i < v.length; i++) {
				var data = $(v[i]).html();
				if (!data) data = $(v[i]).attr('data');
				var o = parse(data);
				if (!_QALET_.lets[o.module]) {
					r[o.module] = true;
					_QALET_._p++;
					_QALET_.lets[o.module] = true;
					o.id = o.module + '_plugin_' + _QALET_._p;
					data[_QALET_._p] = o;
					$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
					console.log(o);
				}
			}
			console.log(r)
		}
		_QALET_.addLet();
	}
);
