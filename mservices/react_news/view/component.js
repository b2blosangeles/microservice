	var ListItem =  React.createClass({
		render: function() {
			return (
				<div>
					<a href="JavaScript:void(0)" onClick={this.props.parent.showDoc(this.props.item)}>{this.props.item.text}</a>
				</div>
			)
		}	
	});
