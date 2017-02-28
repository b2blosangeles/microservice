var data = {
	lang:'en'
};
var tpl = new jSmart(_TPL_['/mservices/smarty_A001/view/infobox.html']);
var res = tpl.fetch( data );
$('.'+mapping_data.id).html(res);
setTimeout(
	function() {
		$('.'+mapping_data.id).show();
	}, 10
);

