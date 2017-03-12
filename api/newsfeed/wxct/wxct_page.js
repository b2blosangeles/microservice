var cache = pkg.cachedRequest(pkg.request);
var jscache = pkg.cachedRequest(pkg.request);
var pipe = req.query.pipe;

var url = require("url");
var url_src = req.query.url;
if (!url_src) {
	res.send('Miss url');
	return true;
}

var p0 = url.parse( url_src), tp='';

if (p0.host.match(/bbs\.wenxuecity\.com/ig)) {
	tp = 'bbs';
}
if (p0.host.match(/www\.wenxuecity\.com/ig)) {
	tp = 'www';
}	
var code_process = function(jslib) {
	return function(error, response, body) {  
	var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');
	
	if (error && response.statusCode !== 200) {
		res.send({error:error.message});
		return true;
	}
	jsdom.env({
		html: body,
	//	scripts: [
	//	  'http://code.jquery.com/jquery-1.5.min.js'
	//	],
		src: [
		  jslib
		],		
		done:function (err, window) {
			if (err) {
			  res.send({error:err.message, link:url_src});
			} else {  

				var $ = window.jQuery;
				var result = {};
				if (tp =='bbs') {
					result.title = $('.title').html();
					result.body = $('#msgbodyContent').html();
				} else {
					result.title = $('h3').html();
					result.link = url_src;
					result.author = $('span[itemprop="author"]').html();
					result.time = $('time[itemprop="datePublished"]').html();
					
					result.body = $('div[id="articleContent"]').html();
					if (result.body) result.body = result.body.replace(/(\n|\r|\t)/ig, '');
					else {
						res.send({error:"Wrong data format!!", link:url_src});
						return true;
					}
				}	
				var imgs = $(result.body).find('img');
				for (var i = 0; i < imgs.length; i++) {
					var fn = 'http://m.qalet.com/api/cached_request/cache10y.js?pipe=1&url='+url.resolve(url_src, imgs[i].src);
					result.body = result.body.replace(imgs[i].src, fn);
				}
				res.send(result);	
			}
		}	
	});
}};

if (pipe) {
	cache.setCacheDirectory('/tmp/cache');
	cache.setValue('ttl', 360000000);	
	cache({url: url_src}).pipe(res);
} else {
	
	jscache.setCacheDirectory('/tmp/cache_lib');
	jscache({url: 'http://code.jquery.com/jquery-1.5.min.js', ttl:36000000000},
		function(error, response, body) {
			cache.setCacheDirectory('/tmp/cache');
			cache.setValue('ttl', 360000000);			
			cache({url: url_src}, code_process(body));
		}
	); 	
}
