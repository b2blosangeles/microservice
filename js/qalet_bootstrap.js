if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}, _file:{}};
$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}
		_QALET_.loadLet = function() {
			var v = $('QALET'), r = {};	
			for (var i = 0; i < v.length; i++) {
				_QALET_._p++;
				var data = $(v[i]).html();
				if (!data) data = $(v[i]).attr('data');
				var o = parse(data);
				if (!o.module) {
					$(v[i]).replaceWith('<div style="color:red">Miss module on '+ data + '</div>');
				}
				if (!_QALET_.lets[o.module]) {
					r[o.module] = true;
					_QALET_.lets[o.module] = true;
				}	
				o.id = o.module + '_plugin_' + _QALET_._p;
				_QALET_.data[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
			}
			if (Object.keys(r).length) console.log(Object.keys(r));
		}
		
		_QALET_.loadLet();
		setInterval(
			function() {
				_QALET_.loadLet();
			}, 500
		);
		
		setTimeout(
			function() {
				$('#niu').html('<qalet>{"module":"video"}</qalet>');	
			}
		,4000);
		console.log(_QALET_.data);
	}
);
