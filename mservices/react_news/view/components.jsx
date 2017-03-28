var ListItem =  React.createClass({
	render: function() {
		var me = this;
		return (
			<div>
				<a href="JavaScript:void(0)" onClick={me.props.parent.showDoc(me.props.item)}>{me.props.item.text}</a>
				<button type="button" className="btn btn-default" onClick={me.props.parent.popup.bind(me, 
					{title:me.props.item.text, body:me.props.item.text})}>popup</button>
			</div>
		)
	}	
});
