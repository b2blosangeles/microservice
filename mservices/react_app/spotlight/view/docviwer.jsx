class Docviwer extends React.Component {
  render() {
    return(
      <span>
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
      </div>
      <div className="modal-body">
        Test case Docviwer
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
      </span>			

    )
  }	
}
