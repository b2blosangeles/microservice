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
		loading() {
			var me = this;
			me.setState({ModalLoading: {textcolor:'#000000', hold:1000, 
				message:'<img src="https://i.stack.imgur.com/oQ0tF.gif" width="24">'}});
			setTimeout(
				function() {
					me.setState({ModalLoading: 'cancel'});	
				}, 5000
			)
		}
		alert() {
			var me = this;
			me.setState({ModalPlus: {type:'alert', body_class:'warning', 
			 box_style:{border:'1px solid red'},
			 message:'nice <span style="color:red">job</span> ok'}});	
		}				
		popup() {
			var me = this;
			me.setState({ModalPlus: {type:'popup', style:'info', backdrop:{bg:'#ff0000', opacity:0.1},
				body: me.docviwer({title:'title', body:'test body'})}});
		}
		lock(e) {
			if ((e.target) && $(e.target) && ($(e.target)[0])) {
				var obj = $(e.target);
				obj.attr('disabled', true);
			}
		}
		release(e) {
			if ((e.target) && $(e.target) && ($(e.target)[0])) {
				var obj = $(e.target);
				obj.attr('disabled', false);
			}
		}		
		loadData(d, e) {
			console.log(e);
			var me = this;
			me.lock(e);

			me.setState({ModalLoading: {textcolor:'#fff', hold:100,
				message:'<img src="https://i.stack.imgur.com/oQ0tF.gif" width="24">'}});	
			
			$.get('http://m.qalet.com/api/newsfeed/wxct/wxct_list.js',
			{}, 
			function (data) {
				
				me.setState({ModalPlus: {type:'alert', style:'success', message:'saved B'}});
				setTimeout(
					function() {
						me.setState({ModalLoading: 'cancel'});	
					},12000
				
				);
				
				
				me.setState({list: data }, function() {
					me.release(e);
				});
			},'json');
		}		
		showList() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							Spotlight - {mapping_data.id}  - {me.props.viewpoint}:: 
							<button type="button" className="btn btn-success" 
								onClick={me.loading.bind(me)} >loading</button>
							
							<button type="button" className="btn btn-success" 
								onClick={me.alert.bind(me)} >alert</button>
							
							<button type="button" className="btn btn-success"
								onClick={me.loadData.bind(me, 2)} >Load Data</button>
						</div>
						{/*
						<ModalPlus parent={me}/>
						<ModalLoading parent={me}/>
						*/}
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
			if (!viewpoint.find('.vpniuniu')[0]) {
				console.log('.vpniuniu missing---');
				viewpoint.find('.vp_'+mapping_data.id).append('<div class=".vpniuniu">Appended text</div>');
				ReactDOM.render(<span><ModalPlus parent={me}/><ModalLoading parent={me}/></span>, 
						viewpoint.find('.vp_'+mapping_data.id).find('.vpniuniu')[0]);
			}	
			// $viewpoint.find('.vp_'+mapping_data.id)[0]
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
