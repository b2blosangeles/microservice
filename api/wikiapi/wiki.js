var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
wikipedia.page.data("上海", { content: true, language }, function(response) {
	res.send(response.text['*']);
});
