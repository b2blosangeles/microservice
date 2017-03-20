try {	
	/*
	ReactDOM.render(
		<div className="container-fluid">
			<div className="row">
				test
			</div>	
		</div>
		,
		 $('.'+mapping_data.id)[0]
	);
	*/
} catch (err) {
	alert(err.message);
}

/*
var data = {
	lang:'en'
};

var showData = function(list, doc) {
	console.log('doc===>');
	console.log(doc);
	jSmart.prototype.left_delimiter = '[';
	jSmart.prototype.right_delimiter = ']';
	var tpl = new jSmart(_TPL_['/mservices/react_news/view/news_list.html']);
	var html = tpl.fetch( {list:list, doc:doc} );
	
	console.log('html===>');
	console.log(html+'.'+mapping_data.id); 
	
	$('.'+mapping_data.id).html(html);
	$('.'+mapping_data.id).show(0);
	$('.'+mapping_data.id).find("a").bind("click", function() {
		console.log('==niu=');
                showDoc($(this).attr('data'), list);
        });	
};

var showDoc = function(v, list) {
	$('.'+mapping_data.id).find("a").unbind("click");
	if (!v) {
		showData(list, {});
	} else {
		$.ajax({url: 'http://m.qalet.com/api/newsfeed/wanwei/getPage.js', data:{url:v},
			dataType:'json', 
			success: function(data,status,xhr){
				showData(list, data);
				//	$('.'+mapping_data.id).find('.doc_show').html(data.title + '<br/>' + data.body);
			},
			error: function(xhr,status,error){
				alert('error');
				showData(list, {});
				
			}
		});		
		
	}

};

$.ajax({url: 'http://m.qalet.com/api/newsfeed/wanwei/getTitle.js', dataType:'json', success: function(data,status,xhr){
	showData(data,{});
}});
*/
