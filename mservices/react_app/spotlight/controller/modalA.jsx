
if (!ModalPlusAA) {
	class ModalPlusA extends React.Component {
		constructor(props) {
			var me = super(props);
			setInterval(function(){	

			}, 50);
			this.state = {ModalPlus: ''}
		}				
		componentDidUpdate (prevProps, prevState) {
			var me = this;
			return true;
			if (prevState.ModalPlus !== me.state.ModalPlus) {
				me.render();
				viewpoint.find('.ModalPlus_'+ mapping_data.id).modal({backdrop:'static'});
			} 
		}
		modalClass () {
			return 'modal fade ModalPlus';
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
							  <div className="modal-dialog" role="document">
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
								  <div className="modal-dialog" role="document">
									<div className={'modal-content ' + box_class} style={box_style} >
										{me.state.ModalPlus.body}
									</div>
								  </div>
								</div>		
							)
						} else {
							return (
								<div className={me.modalClass()} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
								  <div className="modal-dialog" role="document">
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
	/*
	class ModalLoadingA extends React.Component {
		constructor(props) {
			var me = super(props);
			setInterval(function(){	
			}, 50);
			this.state = {ModalLoading: ''}
		}				
		componentDidUpdate (prevProps, prevState) {
			return true;
			var me = this;
			if (prevState.ModalLoading !== me.state.ModalLoading) {
				// me.render();
				viewpoint.find('.ModalLoading_'+ mapping_data.id).modal({backdrop:'static'});
			} 
		}
		ModalLoadingClass () {
			return 'modal fade ModalLoading';
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
	*/
/*
	var ModalPlusAA = ReactDOM.render(
		<ModalPlusA />	
		,
		$('body')[0]
	);
	var ModalLoadingAA = ReactDOM.render(
		<ModalLoadingA />	
		,
		$('body')[0]
	);
*/
}

