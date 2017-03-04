var url = require("url");
var url_src = 'http://www.wenxuecity.com/news/2017/03/03/6068296.html';
var p0 = url.parse( url_src);
var cp = new pkg.crowdProcess();

pkg.request({ uri:url_src  }, function (error, response, body) {  
  var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');

  if (error && response.statusCode !== 200) {
    res.send('www.wenxuecity.com')
  }
  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ],
    done:function (err, window) {
        if (err) {
          res.send('errrr');
        } else {  
		var $ = window.jQuery;
		var result = {};
		result.title = $('h3').html();
		result.author = $('span[itemprop="author"]').html();
		result.time = $('time[itemprop="datePublished"]').html();
		result.body = $('div[id="articleContent"]').html().replace(/(\n|\r|\t)/ig, '');
		result.imgs = [];

		var imgs = $(result.body).find('img'), _f = {};
		for (var i = 0; i < imgs.length; i++) {
			
			var p = url.parse(imgs[i].src), u = imgs[i].src; 
			if (!p['protocol']) {
				u = '[' + p0.protocol + '//' + p0.host + imgs[i].src + ']';
				result.body = result.body.replace(imgs[i].src, u);
			} 
			
			_f[i] = (function(v) {
				return function(cbk) {	
					cbk(v);
				}
			})(u);
					
			
			result.imgs[i]  = u;
			//encodeURIComponent([imgs[i].src]);
			// var src = '---'+imgs[i].src;
			// $(imgs).attr('src', src);
		}
		cp.serial(
			_f,
			function(data) {
				res.send(result);
			},
			30000
		);		
		// result.body = $('div[id="articleContent"]').html()+'===';
		// res.send(result);
		/*
			var result = [];		  
			for (var i = 0; i < objs.length; i++) {
				var href = $(objs[i]).attr('href');
				var p = url.parse(href); 
				if (!p['protocol']) href = p0.protocol + '//' + p0.host  + '/' + href.replace(/^\//,'');
				result[result.length] = {href:href, text:$(objs[i]).html()};
			}
			res.send(result);
		*/	
        }
      }
  });
});
