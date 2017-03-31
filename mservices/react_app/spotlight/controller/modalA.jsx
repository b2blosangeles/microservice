	class ModalPlusA extends React.Component {
		constructor(props) {
			var me = super(props);
			setInterval(function(){	

			}, 50);
			this.state = {ModalPlus: ''}
		}				
		componentDidUpdate (prevProps, prevState) {
			var me = this;
			console.log(111);
			if (prevState.ModalPlus !== me.state.ModalPlus) {
				me.render();
				console.log(222);
				// viewpoint.find('.Modal_Module').modal({backdrop:'static'});
				$('.Modal_Module').modal({backdrop:'static'});
			} 
		}
		modalClass () {
			return 'modal fade ModalPlus Modal_Module';
		}	
		render () {
			var me = this, err_msg = '';
			if (_modal_backdrop_) {
				if (me.state.ModalPlus.backdrop)  _modal_backdrop_.set(me.state.ModalPlus.backdrop);	
				else  _modal_backdrop_.resetDefault();
			}
			var box_class = '', box_style = {}, close_icon = '';

			return(
				<div className={me.modalClass()} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
					<div className={'modal-content ' + box_class} style={box_style} >	
						<span>
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" 
									style={{display:close_icon}}>
									&times;
								</button>
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
							</div>
							<div className="modal-body">
								{/*<span dangerouslySetInnerHTML={{__html: message}}></span>*/}
								'me.state.ModalPlus.message'
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</span>	
					</div>
				  </div>
				</div>				
			);
		}				
	}
	window.Modal_Module = ReactDOM.render(
		<ModalPlusA />	
		,
		viewpoint.find('.vp_'+mapping_data.id)[0]
	);
// console.log(Modal_Module.modalClass());
// Modal_Module.setState({ModalPlus: new Date()}); // $('.Modal_Module').modal({backdrop:'static'});

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

	var ModalLoadingAA = ReactDOM.render(
		<ModalLoadingA />	
		,
		$('body')[0]
	);
*/

