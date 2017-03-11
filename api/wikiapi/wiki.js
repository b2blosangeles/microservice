var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
wikipedia.page.data("上海", { lang:'zh', cache:'/tmp' }, function(response) {
	res.send(response.text['*']);
});
// content: true, 