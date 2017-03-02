if (!_QALET_) var _QALET_={_p:0, data:{}, _Q:{}, _newlet:{}, _d:{}};
_QALET_.cfg = {};



$(document).ready(	
	function() {	
		var _p= $("script[src$='/qalet_bootstrap.js']");
		_QALET_.cfg.app = _p[0].src.replace(_p.attr('src'), '') + '/package/wordpress_plugin.jsx';
		_QALET_.cfg.css = _p[0].src.replace(_p.attr('src'), '') + '/package/wordpress_plugin.css';
	
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}
		_QALET_.customStyle = function (o) {
			return function(data){
				try {
					if (o.css.data) {
						jSmart.prototype.left_delimiter = '[';
						jSmart.prototype.right_delimiter = ']';														
						var tpl = new jSmart(data);
						data = tpl.fetch(o.css.data);
					} 	
					var v = UIQALET.css.parse(data.replace(/\}([\;|\s]*)/g, '} '));	
					UIQALET.css.ruleSelect(v.stylesheet,'.'+o.id);
					$('head').append('<style>'+UIQALET.css.stringify(v)+'</style>');
						
				} catch (err) {
					console.log(err.message);
				}							
			}
		}; 
		_QALET_.callback = function() {
			if (Object.keys(_QALET_._newlet).length) {	
				for (var v in _QALET_._newlet) {
					var o = _QALET_.data[v];
					if ((o.css) && (o.css.link)) {
						$.get(o.css.link, _QALET_.customStyle(o));
					}
					_QALET_._d[_QALET_._newlet[3]] = true;	
					if (typeof _QALET_._Q[o.module] == 'function') {
						delete _QALET_._newlet[v];
						_QALET_._Q[o.module](o);				
					} else {
						console.log('---not found---'+o.module+o.app);
						console.log(_QALET_._newlet);
					}
					console.log(_QALET_._d);
				}	
			}	
		};

		_QALET_.loadLet = function() {
			var v = $('QALET'), _sobj = {}; 
			for (var o in _QALET_._newlet) {
				if (new Date().getTime() - _QALET_._newlet[o][0] > 6000) {
					console.log('remove ' + o);
					delete  _QALET_._newlet[o];
				}
			}
			if (Object.keys(_QALET_._newlet).length) {
				return false;
			}
		
			for (var i = 0; i < v.length; i++) {
				_QALET_._p++;
				var data = $(v[i]).html();
				if (!data)  continue;
				try {
					var o = parse(data);	
				} catch (err) {
					$(v[i]).replaceWith('<div style="color:red">Error, check console for details.</div>');
					console.log('Wrong JSON format:'+ data + ' as "' + err.message );
					continue;
				}
				
				if (!o.module) {
					$(v[i]).replaceWith('<div style="color:red">Error, check console for details.</div>');
					console.log('Miss module on '+ data);
					continue;
				}
				
				if (!o.app) {
					if (!_sobj[_QALET_.cfg.app]) _sobj[_QALET_.cfg.app] = {};
				} else {
					if (!_sobj[o.app]) _sobj[o.app] = {};
				}
				_sobj[(!o.app)?_QALET_.cfg.app:o.app][o.module] = o;
				
				o.id = o.module + '_plugin_' + _QALET_._p;
				
				_QALET_.data[o.id] = o;
				_QALET_._newlet[o.id] = [new Date().getTime(), o.module, (!o.app)?_QALET_.cfg.app:o.app];
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				$('.'+o.id).hide();
			}

			if (Object.keys(_sobj).length) {
				for(var os in _sobj) {
					var osr = _sobj[os];
					var l = Object.keys(osr).join(',');
					var csslink = os.replace(/\.(js|jsx)$/, '.css') +'?plus='+l;
					var jslink = os +'?plus='+l;
					$('<link rel="stylesheet" type="text/css" href="'+ csslink +'" />').appendTo("head");

					$.getScript( jslink + '?plus='+l,
						function( data, textStatus, jqxhr ) {
							_QALET_.callback();
						});
				}
			} else  {	
				_QALET_.callback();		
			}			
		}
		
		_QALET_.loadLet();
		setInterval(
			function() {
				_QALET_.loadLet();
			}, 100
		);			
	}
);
