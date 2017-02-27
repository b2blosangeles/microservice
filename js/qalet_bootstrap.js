if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}, _file:{}, _Q:{}};
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
				if (!_QALET_.lets[o.module]) {
					r[o.module] = true;
					_QALET_.lets[o.module] = true;
				}	
				o.id = o.module + '_plugin_' + _QALET_._p;
				_QALET_.data[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				console.log(o);
			}
			if (Object.keys(r).length) {
				var l = Object.keys(r).join(',');
				var csslink = 'http://docviewer.qalet.com/package/qalet_giant_plugin_direct.css?plus='+l;
				console.log(csslink );
				$('<link rel="stylesheet" type="text/css" href="'+csslink+'" />').appendTo("head");
				
				$.getScript( 'http://docviewer.qalet.com/package/qalet_giant_plugin_direct.jsx?plus='+l+'&callback=_CALLBACK_',
					    function( data, textStatus, jqxhr ) {
				  		console.log( "Load was performed." );
					
						for (var v in _QALET_.data) {
							var o = _QALET_.data[v];
							if (typeof _QALET_._Q[o.module] == 'function') {
								console.log(1);
								_QALET_._Q[o.module](o);				
							} else {
								console.log(2);
								console.log('=='+o.module+'==');
							}
						}
					});
			}	
		}
		
		_QALET_.loadLet();
		setInterval(
			function() {
				_QALET_.loadLet();
				$('#niu').show();
			}, 200
		);
		
		setTimeout(
			function() {
				$('#niu').html('<qalet>{"module":"giant_angular"}</qalet>').hide();	
			}
		,4000);
		console.log(_QALET_.data);
	}
);
