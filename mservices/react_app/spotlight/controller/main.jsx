try {	
	var viewpoint = $('.'+mapping_data.id);
	
	var Home = React.createClass({
		getInitialState: function() {
			var me = this;
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
				});
			},'json');
			
			return {list: [] };
		},

		showList: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							Spotlight 2
						</div>	
					</div>
					,
					viewpoint.find('viewpoint')[0]
				);
			}	
		},		
		render: function() {
			var me = this;		
			return (
				<viewpoint>...</viewpoint>
			  );
		},
		
		componentDidMount: function() {
			var me = this;
			me.showList()();
		},		
		componentDidUpdate: function() {
			var me = this;
			me.showList()();
			
		}
	});
	
	ReactDOM.render(
		<Home/>	
		,
		 viewpoint[0]
	);
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	console.log('err.message===>');
	console.log(err.message);
}

