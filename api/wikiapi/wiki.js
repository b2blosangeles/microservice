var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
var urlparse = require("url");
wikipedia.page.data("Philadelphia_Phillies", { content: true}, function(data) {
	var u = "http://en.wikipedia.org/w/api.php" + urlparse.format({ query: {page:'Philadelphia_Phillies', format:'json'} });
	res.send(u);
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