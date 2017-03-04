var data = {
	lang:'en'
};

var openUrl = function(v) {
	$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_page.js', data:{url:v},
		dataType:'html', success: function(data,status,xhr){
		$('.'+mapping_data.id).find('.doc_show').html(data);
	}});
};

$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_list.js', dataType:'json', success: function(data,status,xhr){
	jSmart.prototype.left_delimiter = '[';
	jSmart.prototype.right_delimiter = ']';
	var tpl = new jSmart(_TPL_['/mservices/jsmarty_news/view/news_list.html']);
	var html = tpl.fetch( {data:data} );
	$('.'+mapping_data.id).html(html);
	$('.'+mapping_data.id).show(0);
	
	$('.'+mapping_data.id).find("a").bind("click", function() {
                openUrl($(this).attr('data'));
        });	
	
}});
