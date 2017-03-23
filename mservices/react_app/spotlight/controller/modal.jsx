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
				me.setState({appid: me.props.parent.inh()() });				
			}, 2000);
			
			return {list: [], appid:7788 };
		},
		componentDidUpdate: function(prevProps, prevState) {
			if (prevState.appid !== me.state.appid) {
				console.log('sub chnaged ===');
			}
		},
		render: function() {
			var me = this;		
			return (
				<div className="modal fade ModalAlert" tabindex="-1" role="dialog" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className="alert alert-warning" role="alert">
						<strong>!</strong> You successfully read this important alert message. 
						{this.props.parent.state.appid}==>
						-->{me.state.appid}
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
						</button>
					</div>
				  </div>
				</div>	
			  );
		}		
	});
