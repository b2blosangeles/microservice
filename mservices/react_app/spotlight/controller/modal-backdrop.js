(function() {
	function checkcss(f) {
		var hasstyle = false;
		var fullstylesheets = document.styleSheets;
		for (var sx = 0; sx < fullstylesheets.length; sx++) {
		    var sheetclasses = fullstylesheets[sx].rules || document.styleSheets[sx].cssRules;
		    for (var cx = 0; cx < sheetclasses.length; cx++) {
			if (sheetclasses[cx].selectorText == f) {
			    hasstyle = true; break;
			    //return classes[x].style;               
			}
		    }
		}
		return hasstyle;
	};
	console.log('checkcss-modal-backdrop=>');
	console.log(checkcss('.modal-backdrop'));
	if (!checkcss('.modal-backdrop')) {
		var modal_backdrop = ".modal-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: #000000; }"+
		".modal-backdrop.fade {opacity: 0;} .modal-backdrop,.modal-backdrop.fade.in {opacity: 0.5;filter: alpha(opacity=50);}";
		var style = $('<style>'+modal_backdrop+'</style>');
		$('html > head').append(style);
	}

})();
