var cache = pkg.cachedRequest(pkg.request);
var jscache = pkg.cachedRequest(pkg.request);
var pipe = req.query.pipe, jslib='';

cache.setCacheDirectory('/tmp/cache');
cache.setValue('ttl', 60000);

jscache.setCacheDirectory('/tmp/cache_lib');
// jscache.setValue('ttl', 3600000000);

var url = require("url");

var url_src = req.query.url;
if (!url_src) {
	res.send('Miss url');
	return true;
}

var p0 = url.parse( url_src), tp='';
var cp = new pkg.crowdProcess();

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
					result.title = $('h3').html()+'=-*-='+window.ss;
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
				var imgs = $(result.body).find('img'), _f = {};
				for (var i = 0; i < imgs.length; i++) {
					
					var p = url.parse(imgs[i].src), u = imgs[i].src, fn=''; 
					if (!p['protocol']) {
						u = p0.protocol + '//' + p0.host + imgs[i].src;
						fn = '/mservices/images/' + u.replace(/(\/|\:)/ig, '_');
						result.body = result.body.replace(imgs[i].src, req.protocol + '://' + req.header('host')  + fn);
					} else {
						u = imgs[i].src;
						fn = '/mservices/images/' + u.replace(/(\/|\:)/ig, '_');
						result.body = result.body.replace(imgs[i].src, req.protocol + '://' + req.header('host')  + fn);						
					} 
					_f[i] = (function(url, fn) {
						return function(cbk) {
							pkg.fs.stat(fn, function(err, stats) {
								if(err == null) {
									cbk(true);
								} else {
									pkg.request(url, {encoding: 'binary'}, function (error, response, body) { 
										pkg.fs.writeFile(fn, body, 'binary', function(err) {
											if(err) {
												return cbk('k'+err.message);
											}
											cbk(fn);
										}); 
										
									});
								}
							});
							
						}
					})(u, env.space_path + fn);
				}
				cp.serial(
					_f,
					function(data) {
						res.send(result);
					},
					30000
				);		
			}
		}	
	});
}};

if (pipe) {
	cache({url: url_src}).pipe(res);
} else {
	jscache({url: 'http://code.jquery.com/jquery-1.5.min.js', ttl:6000},
		function(error, response, body) {
			cache({url: url_src}, code_process(body));
		}
	); 	
}
