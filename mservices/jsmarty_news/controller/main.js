var data = {
	lang:'en'
};

function niu() {
	alert(6);
}

$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_list.js', dataType:'json', success: function(data,status,xhr){
	jSmart.prototype.left_delimiter = '[';
	jSmart.prototype.right_delimiter = ']';
	var tpl = new jSmart(_TPL_['/mservices/jsmarty_news/view/news_list.html']);
	var html = tpl.fetch( {data:data} );
	$('.'+mapping_data.id).html(html);
	$('.'+mapping_data.id).show(0);
}});
