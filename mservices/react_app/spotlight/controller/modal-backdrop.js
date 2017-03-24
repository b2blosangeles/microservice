/* if root domain does not support bootstrop we need add this part in */
var _modal_backdrop_ = {
	default:'',
	setNew:function(cfg) {
		var modal_backdrop = '';
		if (cfg.bg) {
			modal_backdrop += '.modal-backdrop {background-color: '+cfg.bg+'; }';
		}
		if (cfg.fade) {
			modal_backdrop += '.modal-backdrop.fade {opacity: '+ cfg.fade +';}';
		}
		if (cfg.opacity) {
			var opacity = cfg.opacity;
			modal_backdrop += '.modal-backdrop.fade.in {opacity: '+ opacity +';filter: alpha(opacity=' + (opacity * 100) + ');}';
		}
		$('html > head').append( $('<style>'+modal_backdrop+'</style>'));
		return modal_backdrop;
	}
};
(function() {
	function getCssRule(f) {
		var hasstyle = '';
		var fullstylesheets = document.styleSheets;
		for (var sx = 0; sx < fullstylesheets.length; sx++) {
		    var sheetclasses = fullstylesheets[sx].rules || document.styleSheets[sx].cssRules;
		    for (var cx = 0; cx < sheetclasses.length; cx++) {
			if (	(sheetclasses[cx].selectorText) && 
			    	sheetclasses[cx].selectorText.replace(/\s/ig, '') == f.replace(/\s/ig, '')) {	
				hasstyle = sheetclasses[cx].cssText; break; 
			}
		    }
		}
		return hasstyle;
	};

	_modal_backdrop_.default = getCssRule('.modal-backdrop')+
		getCssRule('.modal-backdrop,.modal-backdrop.fade.in') + 
		getCssRule('.modal-backdrop.fade');
	
	if (_modal_backdrop_.default == '') {
		_modal_backdrop_.default = ".modal-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: #000000; }"+
		".modal-backdrop.fade {opacity: 0;} .modal-backdrop,.modal-backdrop.fade.in {opacity: 0.5;filter: alpha(opacity=50);}";
		$('html > head').append( $('<style>'+_modal_backdrop_.default+'</style>'));
	}
})();

