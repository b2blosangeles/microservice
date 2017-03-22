try {	
	var viewpoint = $('.'+mapping_data.id);
	
	var Home = React.createClass({
		getInitialState: function() {
			var me = this;
		//	me.loadData();
			return {list: [], appid:1234 };
		},
		changeId: function(id) {
			var me = this;
			me.setState({appid: id }, function(a, b) { 
				//console.log(me.state);
			});
		},
		loadData: function(data) {
			var me = this;
			return function(e) {
				console.log(e);
				var obj = $(e.target);
				obj.hide();
				setTimeout(
					function() {
						console.log(obj);
					}, 1000
				
				);
			
				$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
				{}, 
				function (data) {
					obj.show();
					me.setState({list: data }, function() {
					});
				},'json');
			
			}.bind(this) 	
		},	
		showList: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							Spotlight 2
							<button type="button" className="btn btn-success" 
								onClick={me.changeId.bind(me, 'new Date().getTime()')} >Change</button>
							
							<button type="button" className="btn btn-success"
								onClick={me.loadData()} >Load Data</button>
						</div>	
					</div>
					,
					viewpoint.find('.vp_'+mapping_data.id)[0]
				);
			}	
		},		
		render: function() {
			var me = this;		
			return (
				<span className={'vp_'+mapping_data.id}>..</span>
			  );
		},
		
		componentDidMount: function() {
			var me = this;
			me.showList()();
		},		
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			console.log('componentDidUpdate-'+new Date());			
			if (JSON.stringify(prevState) !== JSON.stringify(me.state)) {
				console.log('prevState changed===!');
				me.showList()();
			}
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

