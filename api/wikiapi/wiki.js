﻿var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');

wikipedia.page.data("shanghai", { content: true, lang:'en'}, function(response) {
	res.send(response);
});
/*
wikipedia.categories.tree(
	"Philadelphia_Phillies",
	function(tree) {
		res.send(tree);
		//nested data on the category page for all Phillies players
	}
);
*/