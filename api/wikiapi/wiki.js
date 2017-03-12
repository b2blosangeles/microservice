var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');

var cache = pkg.cachedRequest(pkg.request);
cache.setCacheDirectory('/tmp/cache/uii');
cache.setValue('ttl', 1000);


	


wikipedia.page.data("上海", { content: true, lang:'zh'}, function(a, b, c, d) {
	cache({url: c, encoding: 'binary'}, 
		function(err, data, body) {
			if (err) {
				res.send(err.message);
			} else {
				res.send(JSON.paese(body));
			}
			
		}
	);	
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