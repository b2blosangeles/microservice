var data = {
	lang:'en'
};
jSmart.prototype.left_delimiter = '[';
jSmart.prototype.right_delimiter = ']';
var tpl = new jSmart(_TPL_['/mservices/smarty_A001/view/infoboxA.html']);
var res = tpl.fetch( data );
$('.'+mapping_data.id).html(res);
$('.'+mapping_data.id).show(0);
