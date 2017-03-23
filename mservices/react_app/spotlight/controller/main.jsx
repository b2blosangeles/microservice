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
			alert(id);
			me.setState({appid: id }, function(a, b) { 
				
			});
			viewpoint.find('.ModalAlert').modal({backdrop:'static'});
		},
		inh: function() {
			var me = this;
			return function() {
				return me.state.appid;	
			};
		},
		loadData: function(e) {
			var me = this;
			var obj = $(e.target);
			obj.attr('disabled', true);
			viewpoint.find('.GeneralModal').modal({backdrop:'static'});
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				viewpoint.find('.GeneralModal').modal('hide');
				me.setState({list: data }, function() {
					obj.attr('disabled', false);
				});
			},'json');
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
						{me.state.appid}
						<ModalAlert data={{"title":"test title"}} parent={me} config={me.inh()}/>
						<GeneralModal data={{"title":"test title"}} />
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
			// me.popUp()();
			
		},		
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			console.log('componentDidUpdate-'+new Date());			
			if (JSON.stringify(prevState) !== JSON.stringify(me.state)) {
				console.log('prevState changed===!');
			//	me.showList()();
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

