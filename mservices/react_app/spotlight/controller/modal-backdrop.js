(function() {
	function getCssRule(f) {
		var hasstyle = false;
		var fullstylesheets = document.styleSheets;
		for (var sx = 0; sx < fullstylesheets.length; sx++) {
		    var sheetclasses = fullstylesheets[sx].rules || document.styleSheets[sx].cssRules;
		    for (var cx = 0; cx < sheetclasses.length; cx++) {
			if (sheetclasses[cx].selectorText == f) {	
			//	hasstyle = true; break; 
				hasstyle = sheetclasses[cx].cssText; break; 
			}
		    }
		}
		return hasstyle;
	};
	var cssRule = getCssRule('.modal-backdrop')
	if (!cssRule) {
		cssRule = ".modal-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: #000000; }"+
		".modal-backdrop.fade {opacity: 0;} .modal-backdrop,.modal-backdrop.fade.in {opacity: 0.5;filter: alpha(opacity=50);}";
		var style = $('<style>'+cssRule+'</style>');
		$('html > head').append(style);
	}

	console.log("cssRule===>");
	console.log(cssRule);
})();
