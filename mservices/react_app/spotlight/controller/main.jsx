try {	
	var viewpoint = $('.'+mapping_data.id).find('.vp_'+mapping_data.id)[0];
	
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
					viewpoint
				);
			}	
		},		
		render: function() {
			var me = this;		
			return (
				<div className={'vp_'+mapping_data.id}>..</div>
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
		viewpoint
	);
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	console.log('err.message===>');
	console.log(err.message);
}

