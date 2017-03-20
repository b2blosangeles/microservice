try {	
	var Textitem =  React.createClass({
		var me = this.props;
		render: function() {
			return (
				<div><a href="JavaScript:void(0)" onClick={me.parent.showDoc(me.item)}>
					{this.props.item.text}</a>
				</div>
			)
		}	
	});
	/*
	var Itemdoc =  React.createClass({
		var me = this.props;
		render: function() {
			return (
				<div>Test Itemdoc</div>
			)
		}	
	});
	*/
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
			return function() {
				console.log(item);
			}
			
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

