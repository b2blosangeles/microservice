if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}, _file:{}, _Q:{}};
$(document).ready(	
	function() {		
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}

		_QALET_.callback = function() {
			var me = this;
			alert('C');
			if (Object.keys(me._newlet).length) {	
				alert('D');
				for (var v in me._newlet) {
					var o = me.data[v];
					if (typeof me._Q[o.module] == 'function') {
						me._Q[o.module](o);				
					} 
				}	
			}	

		};

		_QALET_.loadLet = function() {
			var v = $('QALET'), r = {}; 
			_QALET_._newlet = {};	
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
				_QALET_._newlet[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				$('.'+o.id).hide();
			}
			if (Object.keys(r).length) {
				var l = Object.keys(r).join(',');
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
