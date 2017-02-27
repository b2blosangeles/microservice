if (!_Q_) var _Q_={lets:{}, _p:0, data:{}, _file:{}};
$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}
		_Q_.loadLet = function() {
			var v = $('QALET'), r = {};	
			for (var i = 0; i < v.length; i++) {
				_Q_._p++;
				var data = $(v[i]).html();
				if (!data) data = $(v[i]).attr('data');
				try {
					var o = parse(data);
					
				} catch (err) {
					$(v[i]).replaceWith('<div style="color:red">Wrong JSON format:'+ data + ' as "' + err.message + '"</div>');
					continue;
				}
				
				if (!o.module) {
					$(v[i]).replaceWith('<div style="color:red">Miss module on '+ data + '</div>');
					continue;
				}
				if (!_Q_.lets[o.module]) {
					r[o.module] = true;
					_Q_.lets[o.module] = true;
				}	
				o.id = o.module + '_plugin_' + _Q_._p;
				_Q_.data[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'">'+o.module+'</div>');
				console.log(o);
			}
			if (Object.keys(r).length) {
				var l = Object.keys(r).join(',');
				$.getScript( 'http://docviewer.qalet.com/package/qalet_giant_plugin_direct.jsx?plus='+l+'&callback=_CALLBACK_',
					    function( data, textStatus, jqxhr ) {
				  		console.log( "Load was performed." );
					
						for (var v in _Q_.data) {
							var o = _Q_.data[v];
							if (typeof _QALET_[o.module] == 'function') {
								console.log(1);
								_QALET_[o.module](o);				
							} else {
								console.log(2);
								console.log('=='+o.module+'==');
							}
						}
					
					
					
					});
			}	
		}
		
		_Q_.loadLet();
		setInterval(
			function() {
				_Q_.loadLet();
				$('#niu').show();
			}, 200
		);
		
		setTimeout(
			function() {
		//		$('#niu').html('<qalet>{"module":"test"}</qalet>').hide();	
			}
		,4000);
		console.log(_Q_.data);
	}
);
