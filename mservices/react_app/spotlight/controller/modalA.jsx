

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
		//	if (_modal_backdrop_) {
		//		if (me.state.ModalPlus.backdrop)  _modal_backdrop_.set(me.state.ModalPlus.backdrop);	
		//		else  _modal_backdrop_.resetDefault();
		//	}


			return(<span></span>);
		}				
	}
	var ModalPlusAA = ReactDOM.render(
		<ModalPlusA />	
		,
		$('#mm')[0]
	);
console.log(ModalPlusA.modalClass());
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

