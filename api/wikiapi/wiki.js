/*
var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
wikipedia.page.data("Philadelphia_Phillies", { content: true}, function(response) {
	res.send(response);
});
*/
var channel = 'niu';
var cache = pkg.cachedRequest(pkg.request);
cache.setCacheDirectory('/tmp/cache' + ((channel)?'/'+channel:''));
cache.setValue('ttl', 1000);
var url = 'https://en.wikipedia.org/w/api.php?action=parse&page=shanghai&prop=categories|externallinks|links|text&lang=en&redirects=true&format=json';

cache({url: url, encoding: 'binary'}, 
	function(err, data, body) {
		if (err) {
			res.send(err.message);
		} else {
			res.send(JSON.stringify(body));
		}
		
	}
); 
/*
wikipedia.categories.tree(
	"Philadelphia_Phillies",
	function(tree) {
		res.send(tree);
		//nested data on the category page for all Phillies players
	}
);
*/