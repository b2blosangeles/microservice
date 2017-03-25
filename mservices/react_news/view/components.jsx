var ListItem =  React.createClass({
	render: function() {
		var me = this;
		return (
			<div>
				<a href="JavaScript:void(0)" onClick={this.props.parent.showDoc(this.props.item)}>{this.props.item.text}</a>
				<button type="button" className="btn btn-default" onClick={me.props.parent.popup.bind(me)}>popup</button>
			</div>
		)
	}	
});
