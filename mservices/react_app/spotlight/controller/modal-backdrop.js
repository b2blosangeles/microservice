(function() {
	function checkcss(f) {
		var hasstyle = false;
		var fullstylesheets = document.styleSheets;
		for (var sx = 0; sx < fullstylesheets.length; sx++) {
		    var sheetclasses = fullstylesheets[sx].rules || document.styleSheets[sx].cssRules;
		    for (var cx = 0; cx < sheetclasses.length; cx++) {
			if (sheetclasses[cx].selectorText == f) {
			    hasstyle = true; break;            
			}
		    }
		}
		return hasstyle;
	};
	if (!checkcss('.modal-backdrop')) {
		var modal_backdrop = ".modal-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: #000000; }"+
		".modal-backdrop.fade {opacity: 0;} .modal-backdrop,.modal-backdrop.fade.in {opacity: 0.5;filter: alpha(opacity=50);}";
		var style = $('<style>'+modal_backdrop+'</style>');
		$('html > head').append(style);
	}
	function getStyle(className) {
	    var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
	    for (var x = 0; x < classes.length; x++) {
		if (classes[x].selectorText == className) {
		    (classes[x].cssText) ? alert(classes[x].cssText) : alert(classes[x].style.cssText);
		}
	    }
	}
	console.log("getStyle('.modal-backdrop')===>");
	console.log(getStyle('.modal-backdrop'));
})();
