try {	
	var Home = React.createClass({
		render: function() {
			return (
				<div className="container-fluid">
					<div className="row">
						test
					</div>	
				</div>
			  );
		}
	});
	ReactDOM.render(
		<Home/>	
		,
		 $('.'+mapping_data.id)[0]
	);
	$('.'+mapping_data.id).show(0);
} catch (err) {
	alert(err.message);
}

