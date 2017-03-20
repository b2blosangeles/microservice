try {	
	var Textitem =  React.createClass({
		render: function() {
			return (
				<div>{this.props.item.text}</div>
			)
		}	
	});	
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

			},'json');
			return {list:[]};
		},	
		render: function() {
			var me = this;
			return (
				<div className="container-fluid">
					<div className="row">
						{this.state.list.map(function(item, index) {
							return <Textitem item={item} parent={me}/>
						})}	
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

