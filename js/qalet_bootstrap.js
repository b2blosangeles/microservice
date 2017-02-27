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
				if (!_QALET_.lets[o.module]) {
					r[o.module] = true;
					_QALET_.lets[o.module] = true;
				}	
				o.id = o.module + '_plugin_' + _QALET_._p;
				_QALET_.data[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
			}
			console.log(Object.keys(r));
		}
		
		console.log('check change -->');
		_QALET_.watch('lets', function (id, oldval, newval) {
		  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
		  return newval;
		});
				
		watch(_QALET_, "_p", function(prop, action, newvalue, oldvalue){
		    alert(prop+" - action: "+action+" - new: "+newvalue+", old: "+oldvalue+"... and the context: "+JSON.stringify(this));
		});
		_QALET_.loadLet();
		console.log(_QALET_.data);
	}
);
