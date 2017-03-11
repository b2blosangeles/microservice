var wikipedia = require(env.space_path + '/api/pkg/wiki/node_modules/node-wikipedia');
wikipedia.page.data("Clifford_Brown", { content: true }, function(response) {
	res.send(response);
});
