var data = {
	lang:'en'
};

var showData = function(list) {
	jSmart.prototype.left_delimiter = '[';
	jSmart.prototype.right_delimiter = ']';
	var tpl = new jSmart(_TPL_['/mservices/jsmarty_news/view/news_list.html']);
	var html = tpl.fetch( {data:list} );
	$('.'+mapping_data.id).html(html);
	$('.'+mapping_data.id).show(0);
};

var showDoc = function(v, list) {
	$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_page.js', data:{url:v},
		dataType:'json', success: function(data,status,xhr){	
		$('.'+mapping_data.id).find('.doc_show').html(data.title + '<br/>' + data.body);
		console.log(list);
	}});
};

$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_list.js', dataType:'json', success: function(data,status,xhr){
	showData(data);
	$('.'+mapping_data.id).find("a").bind("click", function() {
                showDoc($(this).attr('data'), list);
        });	
	
}});
