class ModalPlus extends React.Component {
	constructor(props) {
		var me = super(props);
		setInterval(function(){
			if (me.props.parent.state.ModalPlus) {
				if  (me.props.parent.state.ModalPlus !== me.state.ModalPlus) {
					me.setState({ModalPlus: me.props.parent.state.ModalPlus });
				}	
			}				
		}, 100);
		this.state = {ModalPlus: ''}
	}				
	componentDidUpdate (prevProps, prevState) {
		var me = this;
		if (prevState.ModalPlus !== me.state.ModalPlus) {
			console.log('sub chnaged ===');
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

			case "popup":
				if (!err_msg) {
					return (			
						<div className="modal fade GeneralModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
