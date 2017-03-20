try {	
	var Home = React.createClass({
		getInitialState: function() {
			var me = this;
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				var d = JSON.parse(data); 
				me.setState({list: d }, function() {
					console.log(d);
					//me.playVideo(d[Math.floor(Math.random()*d.length)].vid)();
				});

			},'text');
			return {list:[]};
		},		
		render: function() {
			return (
				<div className="container-fluid">
					<div className="row">
						test 3
					</div>	
				</div>
			  );
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

