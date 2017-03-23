try {	
	var viewpoint = $('.'+mapping_data.id);	
	class Home extends React.Component {
		constructor(props) {
			super(props);
			this.state = {list: [], appid:1234 };
		}		
		changeId(id) {
			var me = this;
			me.setState({ModalAlert: 'Success' });
			viewpoint.find('.ModalAlert').modal({backdrop:'static'});
		}
		loadData(e) {
			var me = this;
			var obj = $(e.target);
			obj.attr('disabled', true);
			/* viewpoint.find('.GeneralModal').modal({backdrop:'static'}); */
			// me.setState({ModalAlert: 'warning' });
			me.setState({ModalLoading: 'warning' });
		
			viewpoint.find('.ModalAlert').modal({backdrop:'static'});
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				// viewpoint.find('.GeneralModal').modal('hide');
				me.setState({ModalLoading: 'success' });
				// me.setState({ModalAlert: 'success' });
				me.setState({list: data }, function() {
					obj.attr('disabled', false);
				});
			},'json');
		}		
		showList() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							Spotlight 2
							<button type="button" className="btn btn-success" 
								onClick={me.changeId.bind(me, new Date().getTime())} >Change</button>
							
							<button type="button" className="btn btn-success"
								onClick={me.loadData.bind(me)} >Load Data</button>
						</div>
						{me.state.appid}
						<ModalAlert data={{"title":"test title"}} parent={me}/>
						<GeneralModal data={{"title":"test title"}} />
					</div>
					,
					viewpoint.find('.vp_'+mapping_data.id)[0]
				);
			}	
		}
		render() {
			var me = this;		
			return (
				<span className={'vp_'+mapping_data.id}>..</span>
			  );
		}
		componentDidMount() {
			var me = this;
			me.showList()();
			// me.popUp()();
			
		}
		componentDidUpdate(prevProps, prevState) {
			var me = this;
			console.log('componentDidUpdate-'+new Date());			
			if (JSON.stringify(prevState) !== JSON.stringify(me.state)) {
				console.log('prevState changed===!');
				
			//	me.showList()();
			}
		}
	}
	
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
