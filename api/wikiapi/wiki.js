var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules');
wikipedia.page.data("Clifford_Brown", { content: true}, function(response) {
	res.send(response);
});
