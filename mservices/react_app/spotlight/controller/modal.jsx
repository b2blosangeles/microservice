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

	var ModalAlert = React.createClass({
		getInitialState: function() {
			var me = this;
			setInterval(function(){
				me.setState({ModalAlert: me.props.parent.state.ModalAlert });				
			}, 200);
			
			return {list: [] };
		},
		componentDidUpdate: function(prevProps, prevState) {
			var me = this;
			if (prevState.ModalAlert !== me.state.ModalAlert) {
				console.log('sub chnaged ===');
				me.render();
			}
		},
		render: function() {
			var me = this;	
			var style, message;
			switch(me.state.ModalAlert) {
				case "success":
					style = 'success';
					message = 'Successfully download data.';
					showclosticon = '';
					break;
				case "warning":
					style = 'warning';
					message = 'Loading ...';
					showclosticon = 'none';
					break;			
			} 
			return (
				<div className="modal fade ModalAlert" tabindex="-1" role="dialog" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className={'alert alert-' + style} role="alert">
						<strong>!</strong> {message}. 
						<button type="button" className="close" data-dismiss="modal" aria-label="Close" style={display:showclosticon}>
							&times;
						</button>
					</div>
				  </div>
				</div>	
			  );
		}		
	});
