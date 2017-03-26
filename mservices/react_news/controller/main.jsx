try {	
	var viewpoint = $('.'+mapping_data.id);
	var DocItem =  React.createClass({
		getInitialState: function() {
			var me = this;
			$.ajax({url: 'http://m.qalet.com/api/newsfeed/wanwei/getPage.js', data:{url:me.props.item.href},
				dataType:'json', 
				success: function(data,status,xhr){
					me.setState({doc: data}, function() {
					});
				},
				error: function(xhr,status,error){
					alert('error');
					

				}
			});			
			return {doc:[]};
		},		
		render: function() {
			return (
				<div>Test Itemdoc {this.state.doc.title}	
					<a className="btn btn-success" href="JavaScript:void(0)" onClick={this.props.parent.showList()}>返回</a>					
					<div dangerouslySetInnerHTML={{__html: this.state.doc.body}}></div>
				</div>
			)
		}	
	});
	var Home = React.createClass({
		
		getInitialState: function() {
			var me = this;

			$.get('http://m.qalet.com/api/newsfeed/wanwei/getTitle.js',
			{}, 
			function (data) {
				me.setState({list: data }, function() {
				});

			},'json');
			return {list: [] };
		},
		showDoc: function(item) {
			var me = this;
			return function() {
				ReactDOM.render(
					<DocItem item={item} parent={me} />
					
					,
					viewpoint.find('.vp_'+mapping_data.id)[0]
				);				
			}
			
		},
		unicode() {
			if (!this._unicode) this._unicode = 0;
			return this._unicode++;
		},		
		popup:function() {
			var me = this;
			me.setState({ModalPlus: {type:'popup', style:'warning', message:'nice job', pp:mapping_data.id, id: me.unicode()}});	
		},
		showList: function() {
			var me = this;
			return function() {
				ReactDOM.render(
					<div className="container-fluid qalet_box">
						<div className="row">
							<button type="button" className="btn btn-success" 
								onClick={me.popup.bind(me)} >Change</button>
							<p>	
							{me.state.list.map(function(item, index) {
								return <ListItem item={item} parent={me}/>
							})}
								
							</p>	
							<ModalPlus parent={me} level={mapping_data.id+'='+me.level()} />
						</div>	
					</div>
					,
					viewpoint.find('.vp_'+mapping_data.id)[0]
				);
			}	
		},	
		level:function() {
			if (!this._level) this._level = 0;
			this._level++;
			return this._level;
		},
		render: function() {
			var me = this;		
			return (
				<span>
					<div id="pp">{mapping_data.id}</div>
					<div id="ttt">{mapping_data.id}</div>
					<span className={'vp_'+mapping_data.id}>...</span>
				</span>	
			  );
		},
		componentDidMount: function() {
			var me = this;
			me.showList()();
			$('#pp').html('<qalet style="display:none">{"module":"spotlight", "app":"http://m.qalet.com/package/qalet_plugin.js", "css":{"link":"/css/customizeA.css","data":{"solution":3}} } </qalet> ');
			$('#ttt').html('<qalet style="display:none">{"module":"spotlight", "app":"http://m.qalet.com/package/qalet_plugin.js", "css":{"link":"/css/customizeA.css","data":{"solution":3}} } </qalet> ');
		},			
		componentDidUpdate: function() {
			var me = this;
			me.showList()();
		}
	});
	
	ReactDOM.render(
		<Home/>	
		,
		viewpoint[0]
	);
	// $('.'+mapping_data.id).show(0);
} catch (err) {
	console.log(err.message);
}

