class Docviwer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var me = this;
		return(
			<span>
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h5 className="modal-title" id="exampleModalLabel">{me.props.data.title}</h5>
				</div>
				<div className="modal-body">
					{me.props.data.body}
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				</div>
			</span>			

		)
	}	
}
