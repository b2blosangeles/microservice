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
			var obj = null;
			me.setState({appid: id }, function(a, b) { 
				//console.log(me.state);
			});
		},
		loadData: function(e) {
			var me = this;
			var obj = $(e.target);
			obj.attr('disabled', true);
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				
				me.setState({list: data }, function() {
					obj.attr('disabled', false);
				});
			},'json');
		},
		popUp: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<span>	
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					  Launch demo modal
					</button>					
					<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div className="modal-dialog" role="document">
					    <div className="modal-content">
					      <div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					      </div>
					      <div className="modal-body">
						...
					      </div>
					      <div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					      </div>
					    </div>
					  </div>
					</div>
					</span>	
					,
					viewpoint.find('.vp_'+mapping_data.id)[0]
				);
			}	
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
								onClick={me.loadData.bind(this)} >Load Data</button>
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
			// me.showList()();
			me.popUp()();
			$('#myModal').modal({});
		},		
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			console.log('componentDidUpdate-'+new Date());			
			if (JSON.stringify(prevState) !== JSON.stringify(me.state)) {
				console.log('prevState changed===!');
				// me.showList()();
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

