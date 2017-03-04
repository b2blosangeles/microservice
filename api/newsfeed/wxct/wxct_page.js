var url = require("url");
var url_src = 'http://www.wenxuecity.com/news/2017/03/03/6068296.html';
var p0 = url.parse( url_src); 

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
		var imgs = $(result.body).find('img');
		for (var i = 0; i < imgs.length; i++) {
			var src = '---'+$(result.body).find('img')[i].src;
			$($(result.body).find('img')[i]).attr('src', src);
		}
		result.body = $('div[id="articleContent"]').html()+'===';
		res.send(result);
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
