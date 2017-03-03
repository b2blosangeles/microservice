var data = {
	lang:'en'
};
jSmart.prototype.left_delimiter = '[';
jSmart.prototype.right_delimiter = ']';
var tpl = new jSmart(_TPL_['/mservices/jsmarty_news/view/news_list.html']);
var res = tpl.fetch( data );
$('.'+mapping_data.id).html(res);
setTimeout(
	function() {
		$('.'+mapping_data.id).find('.dropdown-toggle').dropdown();
		console.log('==try it 2 =');
	},1000
);	

$('.'+mapping_data.id).show(0);
