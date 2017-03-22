try {	
	var viewpoint = $('.'+mapping_data.id)[0];

	var Home = React.createClass({
		
		getInitialState: function() {
			var me = this;
			/*
			$.get('http://m.qalet.com/api/newsfeed/wanwei/getTitle.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
				});

			},'json');
			*/
			return {list:[]};
		},

		showList: function() {
			var me = this;
			console.log(3);
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							Spotlight 1	
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
				<div>.T.</div>
			  );
		},
		componentDidUpdate: function() {
			var me = this;
			console.log(1);
			me.showList()();
		}
	});
	
	ReactDOM.render(
		<Home/>	
		,
		 viewpoint
	).showList()();
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	console.log('err.message===>');
	console.log(err.message);
}

