if (!_QALET_) var _QALET_={lets:{}, _p:0, data:{}, _file:{}, _Q:{}, _newlet:{}};
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
					delete _QALET_._newlet[v];
					var o = _QALET_.data[v];
					if ((o.css) && (o.css.link)) {
						$.get(o.css.link, _QALET_.customStyle(o));
					}			
					if (typeof _QALET_._Q[o.module] == 'function') {
						_QALET_._Q[o.module](o);				
					}
				}	
			}	
		};

		_QALET_.loadLet = function() {
			var v = $('QALET'), _sobj = {}; 
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
				
				if (!_QALET_.lets[o.module]) {
					_sobj[(!o.app)?_QALET_.cfg.app:o.app][o.module] = o;
					_QALET_.lets[o.module] = o;
				}
				o.id = o.module + '_plugin_' + _QALET_._p;
				_QALET_.data[o.id] = o;
				_QALET_._newlet[o.id] = o;
				$(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
				$('.'+o.id).hide();
			}
			console.log(_sobj);
			if (Object.keys(_sobj).length) {
				for(var os in _sobj) {
					console.log(os);
					var osr = _sobj[os];
					
					var l = Object.keys(osr).join(',');
					var csslink = _QALET_.cfg.css +'?plus='+l;
					var jslink = _QALET_.cfg.app +'?plus='+l;
					$('<link rel="stylesheet" type="text/css" href="'+ csslink +'" />').appendTo("head");
					$.getScript( jslink + '?plus='+l,
						function( data, textStatus, jqxhr ) {
							_QALET_.callback();
				  	//	console.log( "Load was performed." );
						});
				}
			} else  {	
				_QALET_.callback();		
			}			
		}
		
		_QALET_.loadLet();
		setInterval(
			function() {
		//		_QALET_.loadLet();
			}, 100
		);			
	}
);
