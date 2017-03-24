class ModalPlus extends React.Component {
	constructor(props) {
		var me = super(props);
		setInterval(function(){
			if (me.props.parent.state.ModalPlus) {
					
				if (me.props.parent.state.ModalPlus == 'cancel') {
				//	console.log('cancel it !');
					viewpoint.find('.ModalPlus').modal('hide');
					me.props.parent.state.ModalPlus = null;
				} else {
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
			}				
		}, 100);
		this.state = {ModalPlus: ''}
	}				
	componentDidUpdate (prevProps, prevState) {
		var me = this;
		if (prevState.ModalPlus !== me.state.ModalPlus) {
			me.render();
			viewpoint.find('.ModalPlus').modal({backdrop:'static'});
		} 
	}
	render () {
		var me = this, err_msg = '';
		if (_modal_backdrop_) {
			if (me.state.ModalPlus.backdrop)  _modal_backdrop_.set(me.state.ModalPlus.backdrop);	
			else  _modal_backdrop_.resetDefault();
		}
		switch(me.state.ModalPlus.type) {
			case "alert":
				var style = (me.state.ModalPlus.style)?me.state.ModalPlus.style:'info';
				var message = (me.state.ModalPlus.message)?('<strong>!</strong> ' + me.state.ModalPlus.message):'<strong>!</strong>';
				var showcloseicon = '';
				if (!err_msg) {
					return (			
						<div className="modal fade ModalPlus" tabindex="-1" role="dialog" aria-hidden="true">
						  <div className="modal-dialog" role="document">
							<div className={'alert alert-' + style} role="alert">
								<span dangerouslySetInnerHTML={{__html: message}}></span> ===
								<button type="button" className="close" data-dismiss="modal" style={{display:showcloseicon}}>
									&times;
								</button>
							</div>
						  </div>
						</div>	
					);
				}
				break;	
			case "loading":
				var textcolor = (me.state.ModalPlus.textcolor)?me.state.ModalPlus.textcolor :'#fff';
				var message = (me.state.ModalPlus.message)?(me.state.ModalPlus.message):'Loading ...';
				message = '<span style="color:'+textcolor+'">'+message+'</span>';
				if (!err_msg) {
					return (			
						<div className="modal fade ModalPlus" tabindex="-1" role="dialog" aria-hidden="true">
						  <div className="modal-dialog" role="document">
							<div className={'text-' + style}>
								<span dangerouslySetInnerHTML={{__html: message}}></span>
							</div>
						  </div>
						</div>	
					);
				}
				break;	
			case "popup":
				if (!err_msg) {
					return (			
						<div className="modal fade ModalPlus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						      </div>
						      <div className="modal-body">
							...GeneralModal..===
						      </div>
						      <div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						      </div>
						    </div>
						  </div>
						</div>		
					);
				}
				break;				
			default:
				err_msg = 'wrong or missong ModelPlus Type';
		} 
		if (err_msg) {
			return (
				<div className="modal fade ModalPlus" tabindex="-1" role="dialog" aria-hidden="true">
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
