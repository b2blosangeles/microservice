var url = require("url");
var url_src = req.query.url;
// 'http://www.wenxuecity.com/news/2017/03/03/6068296.html';
var p0 = url.parse( url_src);
var cp = new pkg.crowdProcess();


pkg.request({ uri:url_src  }, function (error, response, body) {  
	var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');
	
	if (error && response.statusCode !== 200) {
		res.send(error.message);
	}
	jsdom.env({
		html: body,
		scripts: [
		  'http://code.jquery.com/jquery-1.5.min.js'
		],
		done:function (err, window) {
		
			if (err) {
			  res.send(err.message);
			} else {  

				var $ = window.jQuery;
				var result = {};
				result.title = $('h3').html();
				result.author = $('span[itemprop="author"]').html();
				result.time = $('time[itemprop="datePublished"]').html();
				
				result.body = $('div[id="articleContent"]').html();
				if (result.body) result.body = result.body.replace(/(\n|\r|\t)/ig, '');
				else {
					res.send("$ no ('div[id="articleContent"]')");
					return true;
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
});
