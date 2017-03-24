// try {	
	var viewpoint = $('.'+mapping_data.id);	
	class Home extends React.Component {
		constructor(props) {
			super(props);
			this.state = {list: [], appid:1234 };
		}
		test(id) {
			var me = this;
			if (!id) var id = new Date().getTime();
			me.setState({ModalPlus: {type:'loading', style:'info', id: id}});
		//	viewpoint.find('.ModalAlert').modal({backdrop:'static'});
		}		
		changeId(id) {
			var me = this;
			me.setState({ModalPlus: {type:'alert', style:'info', tm: new Date().getTime()}});
		//	viewpoint.find('.ModalAlert').modal({backdrop:'static'});
		}
		loadData(e) {
			var me = this;
			var obj = $(e.target);
			obj.attr('disabled', true);
			me.setState({ModalLoading: {message:'Loading...', pendding:1000} });
			
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				me.setState({ModalLoading: null });
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
							Spotlight
							<button type="button" className="btn btn-success" 
								onClick={me.test.bind(me)} >test</button>
							
							<button type="button" className="btn btn-success" 
								onClick={me.changeId.bind(me, new Date().getTime())} >Change</button>
							
							<button type="button" className="btn btn-success"
								onClick={me.loadData.bind(me)} >Load Data</button>
						</div>
						{me.state.appid}
						
						<ModalPlus data={{"title":"test title"}} parent={me}/>
						
						<ModalAlert data={{"title":"test title"}} parent={me}/>
						<GeneralModal data={{"title":"test title"}} />
						<ModalLoading data={{"title":"test title"}} parent={me} />
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
// } catch (err) {
//	console.log('err.message===>');
//	console.log(err.message);
//}
