﻿var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
wikipedia.page.data("Philadelphia_Phillies", { content: true}, function(data) {
	res.send(data + 'xxx');
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