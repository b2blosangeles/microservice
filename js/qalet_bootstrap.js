if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}, _file:{}, _Q:{}, _newlet:{}};
$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}

		_QALET_.callback = function() {
			if (Object.keys(_QALET_._newlet).length) {	
				for (var v in _QALET_._newlet) {
					delete _QALET_._newlet[v];
					var o = _QALET_.data[v];
					if (typeof _QALET_._Q[o.module] == 'function') {
						_QALET_._Q[o.module](o);				
					}
				}	
			}	
		};

		_QALET_.loadLet = function() {
			var v = $('QALET'), r = {}; 
			if (Object.keys(_QALET_._newlet).length) {
				return false;
			}
			for (var i = 0; i < v.length; i++) {
				_QALET_._p++;
				var data = $(v[i]).html();
				if (!data) {
					continue;
				}
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
				_QALET_._newlet[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				$('.'+o.id).hide();
			}
			if (Object.keys(r).length) {
				var l = Object.keys(r).join(',');
				r = {};	
				var csslink = '/package/wordpress_plugin.css?plus='+l;	
				$('<link rel="stylesheet" type="text/css" href="'+csslink+'" />').appendTo("head");
				$.getScript( '/package/wordpress_plugin.jsx?plus='+l+'&callback=_QALET_.callback',
					function( data, textStatus, jqxhr ) {
				  		console.log( "Load was performed." );
						
					});
				
			} else  {	
				_QALET_.callback();		
			}
		}
		
		_QALET_.loadLet();
		setInterval(
			function() {
				_QALET_.loadLet();
			}, 200
		);			
	}
);