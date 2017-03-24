/* if root domain does not support bootstrop we need add this part in */
var _defaule_modal_backdrop;
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

	_defaule_modal_backdrop = getCssRule('.modal-backdrop')+
		getCssRule('.modal-backdrop,.modal-backdrop.fade.in') + 
		getCssRule('.modal-backdrop.fade');
	
	if (_defaule_modal_backdrop == '') {
		_defaule_modal_backdrop = ".modal-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: #000000; }"+
		".modal-backdrop.fade {opacity: 0;} .modal-backdrop,.modal-backdrop.fade.in {opacity: 0.5;filter: alpha(opacity=50);}";
		var style = $('<style>'+_defaule_modal_backdrop+'</style>');
		$('html > head').append(style);
	}
})();
