try {	
	var Textitem =  React.createClass({
		render: function() {
			return (
				<div><a href="JavaScript:void(0)" onClick={this.props.parent.showDoc(this.props.item)}>
					{this.props.item.text}</a>
				</div>
			)
		}	
	});
	var Itemdoc =  React.createClass({
		getInitialState: function() {
			var me = this;
			$.ajax({url: 'http://m.qalet.com/api/newsfeed/wxct/wxct_page.js', data:{url:this.props.item.link},
				dataType:'json', 
				success: function(data,status,xhr){
					console.log('data--->');
					console.log(data);
				
					//	$('.'+mapping_data.id).find('.doc_show').html(data.title + '<br/>' + data.body);
				},
				error: function(xhr,status,error){
					alert('error');
					

				}
			});			
			
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				me.setState({doc: data[1] }, function() {
					//me.playVideo(d[Math.floor(Math.random()*d.length)].vid)();
				});

			},'json');
			return {doc:[]};
		},		
		render: function() {
			return (
				<div>Test Itemdoc {this.state.doc.text}
					<button type="button" class="btn btn-primary btn-lg" onClick={this.props.parent.showList()}>Back</button>		
				</div>
			)
		}	
	});
	var Home = React.createClass({
		getInitialState: function() {
			var me = this;
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
					//me.playVideo(d[Math.floor(Math.random()*d.length)].vid)();
				});

			},'json');
			return {list:[]};
		},
		showDoc: function(item) {
			var me = this;
			return function() {
				ReactDOM.render(
					<Itemdoc item={item} parent={me} />	
					,
					 $('#viewpoint')[0]
				);				
			}
			
		},
		showList: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid">
						<div className="row">
							{me.state.list.map(function(item, index) {
								return <Textitem item={item} parent={me}/>
							})}	
						</div>	
					</div>
					,
					 $('#viewpoint')[0]
				);
			}	
		},		
		render: function() {
			var me = this;
			return (
				<div id="viewpoint">
					Loading ... 
				</div>
			  );
		},
		componentDidUpdate: function() {
			var me = this;
			me.showList()();
		}
	});
	
	ReactDOM.render(
		<Home/>	
		,
		 $('.'+mapping_data.id)[0]
	);
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	alert(err.message);
}

