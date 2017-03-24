	var GeneralModal = React.createClass({
		render: function() {
			var me = this;		
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
					...GeneralModal..{JSON.stringify(me.props.data)}===
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
	});

	var ModalLoading = React.createClass({
		getInitialState: function() {
			var me = this;
			setInterval(function(){
				me.setState({ModalLoading: me.props.parent.state.ModalLoading });				
			}, 200);
			
			return {list: [] };
		},
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			if (prevState.ModalLoading !== me.state.ModalLoading) {
				console.log('sub ModalLoading chnaged ===');
				if (!me.state.ModalLoading) {
					viewpoint.find('.ModalLoading').modal('hide');
					delete me.viewpoint;
				} else {
					viewpoint.find('.ModalLoading').modal({backdrop:'static'});
				}
				me.render();
				
			}
		},
		render: function() {
			var me = this;	
			var message;
			message = (me.state.ModalLoading)?me.state.ModalLoading.message:'';
			return (
				<div className="modal fade ModalLoading" tabindex="-1" role="dialog" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className="alert alert-warning" role="alert">
						<span dangerouslySetInnerHTML={{__html: message}}></span>
						<button type="button" className="close" data-dismiss="modal">
							&times;
						</button> 
					</div>
				  </div>
				</div>	
			  );
		}		
	});

	var ModalAlert = React.createClass({
		getInitialState: function() {
			var me = this;
			setInterval(function(){
				if (me.props.parent.state.ModalAlert) {
					me.setState({ModalAlert: me.props.parent.state.ModalAlert });
				}				
			}, 100);
			return {ModalAlert: {} };
		},
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			
			if (prevState.ModalAlert !== me.state.ModalAlert) {
				console.log('sub chnaged ===');
				me.render();
				viewpoint.find('.ModalAlert').modal({backdrop:'static'});
			}
		},
		render: function() {
			var me = this;	
			var style, message, showcloseicon;
			switch(me.state.ModalAlert.code) {
				case "success":
					style = 'success';
					message = '<strong>!</strong>Successfully download data.';
					showcloseicon = '';
					break;
				case "warning":
					style = 'warning';
					message = 'Loading ...';
					showcloseicon = 'none';
					break;	
				default:
					style = 'success';
					message = '<strong>!</strong>Successfully download data.';
					showcloseicon = '';				
			} 
			return (
				<div className="modal fade ModalAlert" tabindex="-1" role="dialog" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className={'alert alert-' + style} role="alert">
						<span dangerouslySetInnerHTML={{__html: message}}></span>
						<button type="button" className="close" data-dismiss="modal" style={{display:showcloseicon}}>
							&times;
						</button>
					</div>
				  </div>
				</div>	
			  );
		}		
	});

class ModalPlus extends React.Component {
	constructor(props) {
		var me = super(props);
		setInterval(function(){
			if (me.props.parent.state.ModalPlus) {
				me.setState({ModalPlus: me.props.parent.state.ModalPlus });
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
		var me = this;	
		var tpl, style, message, showcloseicon;
		
		switch(me.state.ModalPlus.type) {
			case "alert":
				style = 'success';
				message = '<strong>!</strong>Successfully download data.';
				showcloseicon = '';
				tpl =			
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
				break;	
			default:
				tpl = 
					<div className="modal fade ModalPlus" tabindex="-1" role="dialog" aria-hidden="true">
					  <div className="modal-dialog" role="document">
						<div className="alert alert-danger" role="alert">
							<strong>!</strong> Wrong or Missong Model Plus Type
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>
					  </div>
					</div>						
		} 
		return (
			tpl	
		  );
	}				
}
