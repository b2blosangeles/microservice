class ModalWin extends React.Component {
	constructor(props) {
		var me = super(props);
		setInterval(function(){	
			if (me.props.parent.state.ModalPlus) {	
				if (me.props.parent.state.ModalPlus == 'cancel') {
					viewpoint.find('.ModalPlus').modal('hide');
					me.props.parent.state.ModalPlus = null;
					return true
				}				
				if (!me.props.parent.state.ModalPlus._id) {
					me.props.parent.state.ModalPlus._id = true;
					return true;
				}		
	
				if (me.props.parent.state.ModalPlus.hold) {
					if  (!me.props.parent.state.ModalPlus.startTime) {
						me.props.parent.state.ModalPlus.startTime = new Date().getTime();
					}
					if  (new Date().getTime() < (me.props.parent.state.ModalPlus.hold + me.props.parent.state.ModalPlus.startTime)) {
						return true;
					}
				}
				if (me.props.parent.state.ModalPlus !== me.state.ModalPlus) {
					me.setState({ModalPlus: me.props.parent.state.ModalPlus });
				}	

					
			} 
			
		}, 50);
		this.state = {ModalPlus: ''}
	}				
	componentDidUpdate (prevProps, prevState) {
		var me = this;
		if (prevState.ModalPlus !== me.state.ModalPlus) {
			me.render();
			viewpoint.find('.ModalPlus_'+ mapping_data.id).modal({backdrop:'static'});
		} 
	}
	modalClass () {
		return 'modal fade ModalPlus ModalPlus_'+ mapping_data.id;
	}	
	render () {
		var me = this, err_msg = '';
		if (_modal_backdrop_) {
			if (me.state.ModalPlus.backdrop)  _modal_backdrop_.set(me.state.ModalPlus.backdrop);	
			else  _modal_backdrop_.resetDefault();
		}
		switch(me.state.ModalPlus.type) {
			case "alert":
				var box_class = '', box_style = '', message = '', close_icon = true;
				
				box_class = (me.state.ModalPlus.box_class)?me.state.ModalPlus.box_class:'info';
				message = (me.state.ModalPlus.message)?('<strong>!</strong> ' + me.state.ModalPlus.message):'<strong>!</strong>';
				close_icon = (me.state.ModalPlus.close_icon === false)?'none':'';
				box_style = (me.state.ModalPlus.box_style)?me.state.ModalPlus.box_style:{};
					
				if (!err_msg) {
					return (			
						<div className={me.modalClass()} tabindex="-1" role="dialog" aria-hidden="true">
						  <div className="modal-dialog modal-lg" role="document">
							<div className={'alert alert-' + box_class} style={box_style} role="alert">
								<span dangerouslySetInnerHTML={{__html: message}}></span>
								<button type="button" className="close" data-dismiss="modal" style={{display:close_icon}}>
									&times;
								</button>
							</div>
						  </div>
						</div>	
					);
				}
				break;	
			case "popup":
				
				var box_class = '', box_style = '', message = '', close_icon = true;
				
				box_class = (me.state.ModalPlus.box_class)?me.state.ModalPlus.box_class:'info';
				message = (me.state.ModalPlus.message)?('<strong>!</strong> ' + me.state.ModalPlus.message):'<strong>!</strong>';
				close_icon = (me.state.ModalPlus.close_icon === false)?'none':'';
				box_style = (me.state.ModalPlus.box_style)?me.state.ModalPlus.box_style:{};
				
				if (!err_msg) {
					if (me.state.ModalPlus.body) {
						return (			
							<div className={me.modalClass()} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							  <div className="modal-dialog modal-lg" role="document">
								<div className={'modal-content ' + box_class} style={box_style} >
									{me.state.ModalPlus.body}
								</div>
							  </div>
							</div>		
						)
					} else {
						return (
							<div className={me.modalClass()} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							  <div className="modal-dialog modal-lg" role="document">
								<div className={'modal-content ' + box_class} style={box_style} >	
									<span>
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" style={{display:close_icon}}>
												&times;
											</button>
											<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
										</div>
										<div className="modal-body">
											{/*<span dangerouslySetInnerHTML={{__html: message}}></span>*/}
											{me.state.ModalPlus.message}
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
											<button type="button" className="btn btn-primary">Save changes</button>
										</div>
									</span>	
								</div>
							  </div>
							</div>										
						)
					}
				}
				break;				
			default:
				err_msg = 'wrong or missong ModelPlus Type';
		} 
		if (err_msg) {
			return (
				<div className={me.modalClass()} tabindex="-1" role="dialog" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className="alert alert-danger" role="alert">
						<strong>!</strong> {err_msg}
						<button type="button" className="close" data-dismiss="modal">
							&times;
						</button>
					</div>
				  </div>
				</div>	
			);
		} else {
			return(<span></span>);
		}
	}				
}

class ModalLoading extends React.Component {
	constructor(props) {
		var me = super(props);
		setInterval(function(){	
			if (me.props.parent.state.ModalLoading) {	
				if (me.props.parent.state.ModalLoading == 'cancel') {
					viewpoint.find('.ModalLoading').modal('hide');
					me.props.parent.state.ModalLoading = null;
					return true
				}				
				if (!me.props.parent.state.ModalLoading._id) {
					me.props.parent.state.ModalLoading._id = true;
					return true;
				}		
	
				if (me.props.parent.state.ModalLoading.hold) {
					if  (!me.props.parent.state.ModalLoading .startTime) {
						me.props.parent.state.ModalLoading.startTime = new Date().getTime();
					}
					if  (new Date().getTime() < (me.props.parent.state.ModalLoading.hold + me.props.parent.state.ModalLoading.startTime)) {
						return true;
					}
				}
				if (me.props.parent.state.ModalLoading !== me.state.ModalLoading) {
					me.setState({ModalLoading: me.props.parent.state.ModalLoading });
				}	

					
			} 
			
		}, 50);
		this.state = {ModalLoading: ''}
	}				
	componentDidUpdate (prevProps, prevState) {
		var me = this;
		if (prevState.ModalLoading !== me.state.ModalLoading) {
			// me.render();
			viewpoint.find('.ModalLoading_'+ mapping_data.id).modal({backdrop:'static'});
		} 
	}
	ModalLoadingClass () {
		return 'modal fade ModalLoading ModalLoading_'+ mapping_data.id;
	}	
	render () {
		var me = this, err_msg = '';
		if (_modal_backdrop_) {
			if (me.state.ModalLoading.backdrop)  _modal_backdrop_.set(me.state.ModalLoading.backdrop);	
			else  _modal_backdrop_.resetDefault();
		}
		var message = '', box_style={};
		var message = (me.state.ModalLoading.message)?(me.state.ModalLoading.message):'Loading ...';
		box_style = (me.state.ModalLoading.box_style)?me.state.ModalLoading.box_style:{color:'#fff'};

		return (			
			<div className={me.ModalLoadingClass()} tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				<div style={box_style}>
					<span dangerouslySetInnerHTML={{__html: message}}></span>
				</div>
			  </div>
			</div>	
		);
	}				
}


class ModalPlus extends React.Component {
	constructor(props) {
		var me = super(props);
	}
	render () {
		var me = this;
		return (			
			<span>
				vvv
				<ModalWin parent={(!me.props.parent)?me:me.props.parent} />
				<ModalLoading parent={(!me.props.parent)?me:me.props.parent} />
			</span>	
		);		
	}
}	


/*
if (!$('.ModalPlus')[0]) {
	var ModalPlus = ReactDOM.render(
		<ModalPlus/>	
		,
		$('body')[0]
	);
	var ModalLoading = ReactDOM.render(
		<ModalLoading />	
		,
		$('body')[0]
	);
}
*/
