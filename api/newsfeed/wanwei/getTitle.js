var cache = pkg.cachedRequest(pkg.request);
var jscache = pkg.cachedRequest(pkg.request);
var pipe = req.query.pipe;

var iconv_lite = require(env.space_path + '/api/pkg/iconv-lite/node_modules/iconv-lite');

var url = require("url");
var url_src = 'http://news.creaders.net/breaking/index.html';
var p0 = url.parse( url_src); 

var code_process = function(jslib) {
	return function(error, response, body) { 
		pkg.request({ uri:url_src, encoding:null}, function (error, response, body) {  
		  var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');

		  if (error && response.statusCode !== 200) {
			res.send(error.message);
		  }
		  jsdom.env({
			html: iconv_lite.decode(body, 'gb2312'),
			src: [
			  jslib
			],	
			done:function (err, window) {
				if (err) {
				  res.send(err.message);
				} else {  
					var $ = window.jQuery;
					var objs = $('#newsList').find('a');
					var result = [];		  
					for (var i = 0; i < objs.length; i++) {
						var href = $(objs[i]).attr('href'), tp = '';
						var p = url.parse(href); 
						/*
						if (!p['protocol']) {
							href = p0.protocol + '//' + p0.host  + '/' + href.replace(/^\//,'');
						} else {
							if (!p.host.match(/wenxuecity\.com/ig)) continue;
							else {
								if (p.host.match(/bbs\.wenxuecity\.com/ig)) {
									tp = 'bbs';
								}
								if (p.host.match(/www\.wenxuecity\.com/ig)) {
									tp = 'www';
								}	
								if (!tp) continue;	
							}
						}
						*/
						result[result.length] = {href:href, text:$(objs[i]).html(), type:tp};
					}
					res.send(result);
				}
			  }
		  });
		});
}};

if (pipe) {
	cache.setCacheDirectory('/tmp/cache/wxct_list');
	cache.setValue('ttl', 3000);	
	cache({url: url_src}).pipe(res);
} else {
	
	jscache.setCacheDirectory('/tmp/cache_lib');
	jscache({url: 'http://code.jquery.com/jquery-1.5.min.js', ttl:36000000000},
		function(error, response, body) {
			cache.setCacheDirectory('/tmp/cache/wxct_list');
			cache.setValue('ttl', 3000000);			
			cache({url: url_src}, code_process(body));
		}
	); 	
}
