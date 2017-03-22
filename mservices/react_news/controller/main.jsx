try {	
	var viewpoint = $('.'+mapping_data.id)[0];
	var DocItem =  React.createClass({
		getInitialState: function() {
			var me = this;
			$.ajax({url: 'http://m.qalet.com/api/newsfeed/wanwei/getPage.js', data:{url:me.props.item.href},
				dataType:'json', 
				success: function(data,status,xhr){
					me.setState({doc: data}, function() {
					});
				},
				error: function(xhr,status,error){
					alert('error');
					

				}
			});			
			return {doc:[]};
		},		
		render: function() {
			return (
				<div>Test Itemdoc {this.state.doc.title}	
					<a className="btn btn-success" href="JavaScript:void(0)" onClick={this.props.parent.showList()}>返回</a>					
					<div dangerouslySetInnerHTML={{__html: this.state.doc.body}}></div>
				</div>
			)
		}	
	});
	var Home = React.createClass({
		
		getInitialState: function() {
			var me = this;

			$.get('http://m.qalet.com/api/newsfeed/wanwei/getTitle.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
					//me.playVideo(d[Math.floor(Math.random()*d.length)].vid)();
					me.showList()();
				});

			},'json');
			return {list:[]};
		},
		showDoc: function(item) {
			var me = this;
			return function() {
				ReactDOM.render(
					<DocItem item={item} parent={me} />	
					,
					 viewpoint
				);				
			}
			
		},
		showList: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							<p>	
							{me.state.list.map(function(item, index) {
								return <ListItem item={item} parent={me}/>
							})}
							</p>	
						</div>	
					</div>
					,
					viewpoint
				);
			}	
		},		
		render: function() {
			var me = this;		
			return (
				<div>...</div>
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
		 viewpoint
	);
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	console.log(err.message);
}

