try {	
	var viewpoint = $('.'+mapping_data.id)[0];

	var Home = React.createClass({
		
		getInitialState: function() {
			var me = this;
			me.setState({list: [] }, function() {});
			$.get('http://m.qalet.com/api/newsfeed/wanwei/getTitle.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
				});
				me.showList()();
			},'json');
			
			return true;
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
				<div>...</div>
			  );
		},
		/*
		componentDidMount: function() {
			var me = this;
			console.log('--1');
			me.showList()();
		},
		*/	
		componentDidUpdate: function() {
			var me = this;
			console.log('--2');
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

