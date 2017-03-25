try {	
	var viewpoint = $('.'+mapping_data.id);	
	class Home extends React.Component {
		constructor(props) {
			super(props);
			this.state = {list: [], appid:1234 };
		}
		docviwer(data) {
			return (
				<Docviwer data={data}/>
			)
		}
		unicode() {
			if (!this._unicode) this._unicode = 0;
			return this._unicode++;
		}
		loading() {
			var me = this;
			me.setState({ModalPlus: {type:'loading', textcolor:'#000000', hold:1000, 
						 message:'<img src="https://i.stack.imgur.com/oQ0tF.gif" width="24">',  id: me.unicode()}});
			setTimeout(
				function() {
					
					me.setState({ModalPlus: 'cancel'});	
				}, 5000
			)
		}		
		popup() {
			var me = this;
			me.setState({ModalPlus: {type:'popup', style:'info',
				body: me.docviwer({title:'title', body:'test body'}), id: me.unicode()}});
		}		
		changeId() {
			var me = this;
			me.setState({ModalPlus: {type:'alert', style:'warning', message:'nice job', 
				backdrop:{bg:'#ff0000', opacity:0.1, id: me.unicode()}}});
		}
		loadData(e) {
			var me = this;
			var obj = $(e.target);
			obj.attr('disabled', true);
			me.setState({ModalPlus: {type:'loading', textcolor:'#fff', hold:10,
				message:'<img src="https://i.stack.imgur.com/oQ0tF.gif" width="24">',  id: me.unicode()}});
			
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				me.setState({ModalPlus: {type:'alert', style:'success', message:'saved', id: me.unicode()}});
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
							Spotlight - {mapping_data.id}  - {me.props.viewpoint} - 
							<button type="button" className="btn btn-success" 
								onClick={me.popup.bind(me)} >popup</button>
							
							<button type="button" className="btn btn-success" 
								onClick={me.loading.bind(me)} >loading</button>
							
							<button type="button" className="btn btn-success" 
								onClick={me.changeId.bind(me)} >Change</button>
							
							<button type="button" className="btn btn-success"
								onClick={me.loadData.bind(me)} >Load Data</button>
						</div>
						<ModalPlus parent={me} viewpoint={mapping_data.id}/>
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
		}
		componentDidUpdate(prevProps, prevState) {
			var me = this;
		//	console.log('componentDidUpdate-'+new Date());			
			if (JSON.stringify(prevState) !== JSON.stringify(me.state)) {
			//	console.log('prevState changed===!');
			}
		}
	}
	
	ReactDOM.render(
		<Home/>	
		,
		viewpoint[0]
	);
 } catch (err) {
	console.log('err.message===>');
	console.log(err.message);
}
